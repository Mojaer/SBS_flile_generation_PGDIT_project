
import { useState } from "react";
import useAllData from "../../Hooks/AllData/useAllData";
import DataTable from "./DataTable/DataTable";


const Data = () => {
    const [allData] = useAllData()
    const [currentMonth, setCurrentMonth] = useState(null)
    const [monthlyData, setMonthlyData] = useState({ error: true })


    const CodesLoad = () => {
        //TODO: here all codes from previous data will be loadedcons
        fetch(`http://localhost:5000/data?month=${currentMonth}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(monthlyData)
        }).then(res => res.json())
            .then(data => alert(data.message));
    }
    // console.log(allData)
    const handleData = (event) => {
        event.preventDefault();
        const month = event.target.month.value
        setCurrentMonth(month)


        fetch(`http://localhost:5000/data?month=${month}`)
            .then(response => response.json())
            .then(res => setMonthlyData(res))

    }
    return (
        <section>
            <div className="flex justify-between ">
                <form onSubmit={handleData} className="flex flex-row items-center">
                    <select className="select bg-gray-300 select-bordered ps-4 w-full text-xl max-w-xs p-2 border-spacing-1 rounded-xl outline-1" name="month">
                        <option disabled defaultValue>Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                    </select>
                    <input className="btn btn-sm ms-5" type="submit" value='Show' />
                </form>
                {currentMonth && <div className="flex flex-row items-center">Update data from previous Collection <br />
                    <button className="btn ms-2" onClick={CodesLoad}>Update</button>
                </div>}
            </div>

            <br />
            {monthlyData.error && <div className="text-red-500 font-semibold text-xl my-5">
                {monthlyData.message}
            </div>}
            <div className="mt-5">
                <div className="overflow-x-auto">
                    {!monthlyData.error && <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-blue-800 font-semibold text-base">
                                <th></th>
                                <th>ACC NO.</th>
                                <th>ACC Name</th>
                                <th>Currency</th>
                                <th>Amount</th>
                                <th>H_S Code</th>
                                <th>V_S Code</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {/*  row  */}
                            {monthlyData.data.map((data, index) =>
                                <DataTable key={data._id} data={data} index={index}></DataTable>)}
                        </tbody>
                    </table>
                    }
                </div>

            </div>
        </section>
    );
};

export default Data;