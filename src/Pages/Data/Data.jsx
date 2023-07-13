
import { useState } from "react";
// import useAllData from "../../Hooks/AllData/useAllData";
import DataTable from "./DataTable/DataTable";
import Swal from "sweetalert2";
import MonthList from "../../Shared/MonthList/MonthList";


const Data = () => {
    // const [allData] = useAllData()
    const [currentMonth, setCurrentMonth] = useState(null)
    const [monthlyData, setMonthlyData] = useState({ error: true })
    const [message, setMessage] = useState()

    // function to code load from previous data
    const CodesLoad = () => {
        //TODO: here all codes from previous data will be loadedcons
        setMessage('code Loading...')

        // console.log(monthlyData.data.length)
        const length = Math.ceil(monthlyData.data.length / 130)
        for (let i = 0; i < length; i++) {
            let first = i * 130;
            let last = (i + 1) * 130;

            setTimeout(() => {
                let datachunk = monthlyData.data.slice(first, last);
                const accData = { data: datachunk }
                fetch(`https://sbs-server-mojaer.vercel.app/data?month=${currentMonth}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(accData)
                }).then(res => res.json())
                    .then(data => {
                        setMessage(`${Math.ceil(i * 100 / (length - 1))}% Code updated successfully. Please reload after 100% completion `)
                        setMonthlyData(data)
                    });

            }, 8000 * i)
        }
        setMessage('Please wait...')
    }



    // console.log(allData)
    //show data
    const handleData = (event) => {
        setMessage('data loading.......Please wait...');
        event.preventDefault();
        const month = event.target.month.value
        setCurrentMonth(month)

        fetch(`https://sbs-server-mojaer.vercel.app/data?month=${month}`)
            .then(response => response.json())
            .then(res => {
                setMonthlyData(res)
                setMessage(`${res.data.length} data is loaded successfully`)
            })
    }


    //data sort for codeless data
    const handleSort = () => {
        const sortedData = monthlyData.data.filter(data => data.H_S_Code === '---' && data.V_S_Code === '---')
        setMonthlyData({ data: sortedData, error: false })
        setMessage(`${sortedData.length} data has no code`)
    }


    //all data delete for specific month
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                setMessage('please wait.. data is being deleted');
                fetch(`https://sbs-server-mojaer.vercel.app/data?month=${currentMonth}`, {
                    method: 'DELETE',
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setMonthlyData({ error: true, data: [] })
                            setCurrentMonth(null)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                    })
            }
        })
    };



    return (
        <section>
            <div className="flex justify-between ">
                <form onSubmit={handleData} className="flex flex-row items-center">
                    <select className="select bg-gray-300 select-bordered ps-4 w-full text-xl max-w-xs p-2 border-spacing-1 rounded-xl outline-1" name="month">
                        <option disabled defaultValue>Month</option>
                        <MonthList></MonthList>

                    </select>
                    <input className="btn btn-sm ms-5" type="submit" value='Show' />
                </form>
                {!monthlyData.error &&
                    <button
                        onClick={handleDelete} className="btn ms-2 bg-red-600 text-white" >Delete {currentMonth}
                    </button>}
                {!monthlyData.error &&
                    <button
                        onClick={handleSort} className="btn ms-2 bg-slate-600 text-white" >Sort new Accounts
                    </button>}

                {!monthlyData.error && <div className="flex flex-row items-center">Update data from previous Collection <br />
                    <button className="btn ms-2" onClick={CodesLoad}>Update</button>
                </div>}
            </div>
            <br />
            {currentMonth && <div className="text-red-600 text-center">{message}</div>}

            <br />
            {monthlyData.error && <div className="text-red-500 font-semibold text-xl my-5">
                {monthlyData.message}
            </div>}
            <div className="mt-5">
                <div className="overflow-x-auto">
                    {!monthlyData.error && <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-blue-800 font-semibold text-base ">
                                <th></th>
                                <th>ACC NO.</th>
                                <th>ACC Name</th>
                                <th>Currency</th>
                                <th>Amount</th>
                                <th>Instrument Code</th>
                                <th>Sector Code</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {/*  row  */}
                            {monthlyData.data.map((data, index) =>
                                <DataTable key={data._id} data={data} currentMonth={currentMonth} index={index}></DataTable>)}
                        </tbody>
                    </table>
                    }
                </div>

            </div>
        </section>
    );
};

export default Data;