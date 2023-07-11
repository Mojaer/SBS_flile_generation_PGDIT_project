import { NavLink, Navigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../Authentication/AuthCenter/AuthContext";


const Header = () => {
    const { user, userLogout } = useContext(authContext);

    const handleDelete = () => {
        userLogout()
        return <Navigate to="/login" replace={true} />
    }


    const navItem = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/data'>Data</NavLink></li>
        <li><NavLink to='/sbs_data'>SBS_Data</NavLink></li>
    </>
    return (
        <nav className="navbar bg-base-100 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">SBS Generator</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <button onClick={handleDelete} className="btn">Logout</button>}
            </div>
        </nav>
    );
};

export default Header;