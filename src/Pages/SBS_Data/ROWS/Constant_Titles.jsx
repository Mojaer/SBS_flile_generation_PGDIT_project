import Variables from "../../../Variables/Variables";


const Constant_Titles = () => {
    const { S_title, alphabets } = Variables()
    return (
        <>
            <tr className="text-blue-800 font-semibold text-base">
                <th></th>
                {/* S1 S2 S3 */}
                {
                    alphabets.map((title, index) => <th key={index}>{title}</th>)
                }

            </tr><tr className="text-blue-800 font-semibold text-base">

                <th></th>
                {/* S1 S2 S3 */}
                {
                    S_title.map((title, index) => <th key={index}>{title}</th>)
                }
            </tr>
        </>
    );
};

export default Constant_Titles;