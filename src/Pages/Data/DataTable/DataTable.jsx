import { useRef, useState } from 'react';
import './DataTable.css'

const DataTable = ({ data, index, currentMonth }) => {
    const { Ac_NO, Ac_Name, Currency, Amount, H_S_Code, V_S_Code } = data;
    const [inactive, setInactive] = useState(true)

    const h_s_code = useRef()
    const v_s_code = useRef()

    const handleUpdate = () => {
        const hs_code = h_s_code.current.value
        const vs_code = v_s_code.current.value
        // console.log(hs_code, vs_code)
        const code = { hs_code, vs_code, Ac_NO }
        if (hs_code != '---' && vs_code != '---') {
            fetch(`http://localhost:5000/codeUpdate?month=${currentMonth}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(code)
            }).then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('code is updated successfully')
                    }
                })
        }
        else {
            alert('input a valid code');
            // todo input a validation 
        }

        setInactive(true)
    }
    return (
        <tr className="bg-base-200">
            <th>{index + 1}</th>
            <td>{Ac_NO}</td>
            <td>{Ac_Name}</td>
            <td>{Currency}</td>
            <td>{Amount} </td>
            <td><input disabled={inactive} ref={h_s_code} defaultValue={H_S_Code || '---'} type="text" /> </td>
            <td><input disabled={inactive} ref={v_s_code} defaultValue={V_S_Code || '---'} type="text" /> </td>
            <td>{inactive ?
                <button className='btn' onClick={() => setInactive(false)}>Update Code</button>
                : <button className='btn' onClick={handleUpdate}>Update</button>}
            </td>
        </tr>
    );
};

export default DataTable