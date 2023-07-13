import Variables from "../../../Variables/Variables";


const SBS_Sector_title = () => {
    const { Sector_title } = Variables()
    return (
        <>

            <tr className="text-blue-800 font-semibold text-base">
                <th></th>
                <th>Instruments</th>
                <th>Code</th>

                {/* loop of sector titles */}
                {
                    Sector_title.map((title, index) => <th key={index}>{title}</th>)
                }
                <th>TOTAL</th>
            </tr>
        </>

    );
};

export default SBS_Sector_title;