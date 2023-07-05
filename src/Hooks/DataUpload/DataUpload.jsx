// import { useEffect, useState } from "react";


// const DataUpload = (accData) => {

//     const [loading, setLoading] = useState(false);
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         if (accData.data.length > 0) {

//             fetch('https://sbs-server-mojaer.vercel.app/accdata', {
//                 method: 'POST',
//                 headers: {
//                     'content-type': 'application/json'
//                 },
//                 body: JSON.stringify(accData)
//             }).then(res => res.json())
//                 .then(data => {
//                     if (data.insertedCount > 0) {
//                         setMessage('Data inserted successfully')
//                     } else {
//                         setMessage(data.message)
//                     }
//                 })

//             setLoading(false);
//         }

//     }, [accData])

//     return [loading, message];
// };

// export default DataUpload;