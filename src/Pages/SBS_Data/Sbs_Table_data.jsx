

const Sbs_Table_data = ({ data, index }) => {
    // console.log(data)
    const { code, s12110s, s12120s, s12500s, s12210s, s12220s, s12230s, s12240s, s12250s, s12330s, s12340s, s12350s, s12360s, s12370s, s12380s, s12390s } = data
    return (
        <tr>
            <th>{index + 1}</th>
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


        </tr>
    );
};

export default Sbs_Table_data;