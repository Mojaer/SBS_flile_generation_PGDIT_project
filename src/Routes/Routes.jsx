import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Data from "../Pages/Data/Data";
import App from "../App";
import SBS_Data from "../Pages/SBS_Data/SBS_Data";
import PrivateRoute from "../Authentication/PrivateRoute/PrivateRoute";
import Login from "../Pages/Registratoin/Login";
import Registration from "../Pages/Registratoin/Registration";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <PrivateRoute> <App></App></PrivateRoute>,
            },
            {
                path: "/data",
                element: <PrivateRoute> <Data></Data></PrivateRoute>,
            },
            {
                path: "/sbs_data",
                element: <PrivateRoute> <SBS_Data></SBS_Data></PrivateRoute>,
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/registration',
        element: <Registration></Registration>,
    },
    {
        path: '*',
        element: <div>404 Not Found</div>
    }

]);

export default router;