import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Data from "../Pages/Data/Data";
import App from "../App";


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
        ]
    },
    {
        path: '*',
        element: <div>404 Not Found</div>
    }

]);

export default router;