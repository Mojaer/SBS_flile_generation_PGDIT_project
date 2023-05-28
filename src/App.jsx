import React, { useCallback, useEffect, useState } from "react";
import { read, utils, writeFileXLSX } from 'xlsx';
import './App.css'

function App() {

  const [pres, setPres] = useState([]);
  const [file, setFile] = useState(null);

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
    setPres(data); // update state
  }

  console.log(pres)

  return (
    <>

      <form onSubmit={handleSubmit} className="flex items-center space-x-6">
        <span className="sr-only">Upload Excel</span>
        <input type="file" accept=".xlsx" onChange={handleFileChange} className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
        <button type="submit">Upload</button>
      </form>
    </>
  )
}

export default App
