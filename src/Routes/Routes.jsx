import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Data from "../Pages/Data/Data";
import App from "../App";
import SBS_Data from "../Pages/SBS_Data/SBS_Data";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <App></App>,
            },
            {
                path: "/data",
                element: <Data></Data>,
            },
            {
                path: "/sbs_data",
                element: <SBS_Data></SBS_Data>,
            },
        ]
    },
    {
        path: '*',
        element: <div>404 Not Found</div>
    }

]);

export default router;