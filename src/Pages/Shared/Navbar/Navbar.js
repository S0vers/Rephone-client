import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import logo from '../../../assets/logo/favicon.png'
import { AuthContext } from '../../../Context/AuthProvider';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(error => console.error())
    }
    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to='/dashboard'>DashBoard</Link></li>
                    <li><button onClick={handleLogOut}>Sign out</button></li>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
        }
    </React.Fragment>
    return (
        <div className="navbar bg-green-200 flex justify-between">
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <AiOutlineBars></AiOutlineBars>
            </label>
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className="w-10 rounded-full" src={logo} alt="Company Logo" />
                    RePhone
                </Link>
            </div>
            <div className="dropdown dropdown-end flex-none">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <FaBars></FaBars>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;