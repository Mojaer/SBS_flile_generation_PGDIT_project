import { useState } from 'react';
import './DataTable.css'

const DataTable = ({ data, index }) => {
    const { Ac_NO, Ac_Name, Currency, Amount, H_S_Code, V_S_Code } = data;
    const [inactive, setInactive] = useState(true)
    return (
        <tr className="bg-base-200">
            <th>{index + 1}</th>
            <td>{Ac_NO}</td>
            <td>{Ac_Name}</td>
            <td>{Currency}</td>
            <td>{Amount} </td>
            <td><input disabled={inactive} defaultValue={H_S_Code || '---'} type="text" /> </td>
            <td><input disabled={inactive} defaultValue={V_S_Code || '---'} type="text" /> </td>
            <td>{inactive ?
                <button className='btn' onClick={() => setInactive(false)}>Update Code</button>
                : <button className='btn'>Update</button>}
            </td>
        </tr>
    );
};

export default DataTable