import { useEffect, useState } from "react";
import { read, utils } from 'xlsx';
import './App.css'

function App() {

  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [month, setMonth] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);




  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      console.log('No file selected');
      return;

    }
    const f = await file.arrayBuffer();
    const wb = read(f); // parse the array buffer
    const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    const data = utils.sheet_to_json(ws); // generate objects
    setData(data); // update state
    setMonth(event.target.month.value)
  }

  console.log(data, month)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const accData = { data, month }
  useEffect(() => {
    fetch('http://localhost:5000/accdata', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(accData)
    })
  }, [accData])

  return (
    <>

      <form onSubmit={handleSubmit} className="flex items-center space-x-6">
        <span className="sr-only">Upload Excel</span>
        <input type="file" required
          accept=".xlsx" onChange={handleFileChange}
          className="block w-full text-xl border rounded-xl p-4 outline-1 text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
        <select className="select bg-gray-300 select-bordered w-full text-xl max-w-xs p-4 border-spacing-1 rounded-xl outline-1" name="month">
          <option disabled selected>Month</option>
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

        <button className="btn bg-green-600 font-semibold px-4 text-xl p-4 rounded-xl " type="submit">Upload</button>
      </form>
    </>
  )
}

export default App
