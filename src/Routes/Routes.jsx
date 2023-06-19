import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Data from "../Pages/Data/Data";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/data",
        element: <Data></Data>,
    },
]);

export default router;