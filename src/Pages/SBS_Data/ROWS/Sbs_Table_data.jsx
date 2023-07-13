
import Variables from "../../../Variables/Variables";


const Sbs_Table_data = ({ data, index }) => {
    const { Instrument_title } = Variables()
    // console.log(data)
    const { code, s12110s, s12120s, s12500s, s12210s, s12220s, s12230s, s12240s, s12250s, s12330s, s12340s, s12350s, s12360s, s12370s, s12380s, s12390s } = data
    const amounts = [s12110s, s12120s, s12500s, s12210s, s12220s, s12230s, s12240s, s12250s, s12330s, s12340s, s12350s, s12360s, s12370s, s12380s, s12390s]

    const summation = () => {
        let total = 0;
        for (let x in amounts) {
            total += parseFloat(amounts[x]);
        }
        return total;
    }

    const total = summation();

    return (
        <tr>
            <th>{index + 1}</th>
            <th>{Instrument_title[index]}</th>
            <td>{code}</td>
            <td>{s12110s}</td>
            <td>{s12120s}</td>
            <td>{s12500s}</td>
            <td>{s12210s}</td>
            <td>{s12220s}</td>
            <td>{s12230s}</td>
            <td>{s12240s}</td>
            <td>{s12250s}</td>
            <td>{s12330s}</td>
            <td>{s12340s}</td>
            <td>{s12350s}</td>
            <td>{s12360s}</td>
            <td>{s12370s}</td>
            <td>{s12380s}</td>
            <td>{s12390s}</td>
            <th>{total.toFixed(2)}</th>
        </tr>
    );
};

export default Sbs_Table_data;