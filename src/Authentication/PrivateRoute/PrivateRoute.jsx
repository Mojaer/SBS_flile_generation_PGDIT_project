
import { useContext } from "react";
import { authContext } from "../AuthCenter/AuthContext";
import { useNavigate } from "react-router-dom";




const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const navigate = useNavigate()


    if (loading) {
        return <>loading</>
    }
    if (user) {
        return (
            <>
                {children}
            </>
        );
    } else {
        navigate("/login");
    }
};

export default PrivateRoute;