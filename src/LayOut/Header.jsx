import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const navItem = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/instructors">Instructors</Link></li>
    <li><Link to="/classes">Classes</Link></li>
    <li><Link to="/dashboard">Dashboard</Link></li>
    <li><Link to="/login">Login</Link></li>
    </>
    return (
        <div className="navbar fixed z-10 px-10 bg-black bg-opacity-50 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navItem}
                    </ul>
                </div>
                <a className="text-2xl font-semibold  text-center text-[#EFCF4F] z-50">
                    Summer Camp <br/>  <span className="text-xl font-light text-white border-t-2">Music School</span>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
        </div>
    );
};

export default Header;