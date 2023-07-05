import { useEffect, useState } from "react";
import { read, utils } from 'xlsx';
import './App.css'

function App() {

  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);
  const [month, setMonth] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

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

  // console.log(data, month)
  // eslint-disable-next-line react-hooks/exhaustive-deps


  useEffect(() => {
    if (data.length > 0 && !loading) {
      setMessage('loading...')
      // console.log(accData.data.length)
      // const accData = { data }
      const length = Math.ceil(data.length / 100)

      for (let i = 0; i < length; i++) {
        let first = i * 100;
        let last = (i + 1) * 100;

        setTimeout(() => {
          let datachunk = data.slice(first, last);
          const accData = { data: datachunk }
          // const number = Math.pow(-1, i)
          fetch(`https://sbs-server-mojaer.vercel.app/accdata?month=${month}`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(accData)
          }).then(res => res.json())
            .then(data => {
              if (data.insertedCount > 0) {
                setMessage(`${Math.ceil(i * 100 / (length - 1))}% Data inserted successfully`)
              } else {
                setMessage(data.message)
                console.log(accData);
              }
            })

          // console.log(accData);
        }, 8000 * i)
      }

      setLoading(true);
    }

  }, [data, loading, month])

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

        <button className="btn bg-green-600 font-semibold px-4 text-xl p-2 rounded-xl " type="submit">Upload</button>
      </form>
      <br />
      <br />
      {!loading ? '' : <div className="text-red-500 font-semibold">{message}</div>}
    </>
  )
}

export default App
