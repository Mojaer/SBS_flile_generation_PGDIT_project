

const GrandTotal = ({ data }) => {
    let grandTotal = []

    data.map(eachData => {
        const arr = Object.values(eachData)
        grandTotal.push(...arr.slice(1, 16))
    })

    const total = grandTotal.reduce((sum, num) => sum + parseFloat(num), 0)
    // console.log(total)
    return (
        <th className="text-green-700 text-lg">
            {total.toFixed(2)}
        </th>
    );
};

export default GrandTotal;