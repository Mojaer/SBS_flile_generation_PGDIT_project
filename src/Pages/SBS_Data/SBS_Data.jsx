import { useRef, useState } from "react";
import Sbs_Table_data from "./Sbs_Table_data";
import MonthList from "../../Shared/MonthList/MonthList";
import { DownloadTableExcel } from "react-export-table-to-excel";


const SBS_Data = () => {
    const [currentMonth, setCurrentMonth] = useState(null)
    const [sbs_data, setSbsData] = useState([])
    const tableRef = useRef(null);
    const handleData = (event) => {
        event.preventDefault();
        const month = event.target.month.value
        setCurrentMonth(month)

        fetch(`https://sbs-server-mojaer.vercel.app/sbs_data?month=${month}`)
            .then(response => response.json())
            .then(res => setSbsData(res.data))

    }

    // console.log(currentMonth, sbs_data)
    return (
        <section>
            <form onSubmit={handleData} className="flex flex-row items-center">
                <select className="select bg-gray-300 select-bordered ps-4 w-full text-xl max-w-xs p-2 border-spacing-1 rounded-xl outline-1" name="month">
                    <option disabled defaultValue>Month</option>
                    <MonthList></MonthList>
                </select>
                <input className="btn btn-sm ms-5" type="submit" value='Show' />
            </form>
            <DownloadTableExcel
                filename='SBS file'
                sheet={currentMonth}
                currentTableRef={tableRef.current}
            >

                {currentMonth && <button className="btn btn-primary mt-4"> Convert to excel </button>}

            </DownloadTableExcel>


            <div className="mt-5">
                <div className="overflow-x-auto">
                    <table className="table text-center" ref={tableRef}>
                        {/* head */}
                        <thead>
                            <tr className="text-blue-800 font-semibold text-base">
                                <th></th>
                                <th>code</th>
                                <th>12110</th>
                                <th>12120</th>
                                <th>12500</th>
                                <th>12210</th>
                                <th>12220</th>
                                <th>12230</th>
                                <th>12240</th>
                                <th>12250</th>
                                <th>12330</th>
                                <th>12340</th>
                                <th>12350</th>
                                <th>12360</th>
                                <th>12370</th>
                                <th>12380</th>
                                <th>12390</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {/*  row  */}
                            {sbs_data.map((data, index) => <Sbs_Table_data key={data.code} data={data} index={index} ></Sbs_Table_data>)}
                        </tbody>
                    </table>


                </div>
            </div>

        </section>
    );
};

export default SBS_Data;