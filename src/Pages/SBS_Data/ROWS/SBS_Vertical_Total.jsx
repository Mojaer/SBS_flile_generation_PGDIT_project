
import Variables from "../../../Variables/Variables";
import GrandTotal from "./GrandTotal/GrandTotal";



const SBS_Vertical_Total = ({ data }) => {

    const { Sector_Codes } = Variables()
    // console.log(Sector_Codes);
    const summation = (code) => {
        let sum = 0;
        data.map((value) => {
            // console.log(value[code])
            sum += parseFloat(value[code])
        })

        return sum
    }


    return (
        <tr >
            <th>TOTAL</th>
            <th></th>
            <th></th>
            {
                Sector_Codes.map((code) => <th key={code}>{summation(code).toFixed(2)}</th>)
            }

            <GrandTotal data={data}></GrandTotal>
        </tr>
    );
};

export default SBS_Vertical_Total;