
import { useState } from "react";
import useAllData from "../../Hooks/AllData/useAllData";
import DataTable from "./DataTable/DataTable";


const Data = () => {
    const [allData] = useAllData()
    const [monthlyData, setMonthlyData] = useState({ error: true })


    // console.log(allData)
    const handleData = (event) => {
        event.preventDefault();
        const month = event.target.month.value
        // console.log(month)

        fetch(`http://localhost:5000/data?month=${month}`)
            .then(response => response.json())
            .then(res => setMonthlyData(res))

    }
    return (
        <section>
            <form onSubmit={handleData}>
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
            <br />
            {monthlyData.error && <div className="text-red-500 font-semibold text-xl my-5">{monthlyData.message}</div>}
            <div className="mt-5">
                {!monthlyData.error && monthlyData.data.map(data => <DataTable key={data._id} data={data}></DataTable>)}
            </div>
        </section>
    );
};

export default Data;