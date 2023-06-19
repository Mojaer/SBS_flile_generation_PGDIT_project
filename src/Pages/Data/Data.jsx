
import useAllData from "../../Hooks/AllData/useAllData";


const Data = () => {
    const [allData] = useAllData()

    console.log(allData)
    return (
        <div>

        </div>
    );
};

export default Data;