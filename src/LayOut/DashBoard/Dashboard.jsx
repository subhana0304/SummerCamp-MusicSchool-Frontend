import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaHome, FaMoneyBill, FaShoppingCart, FaUser, FaWallet } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>SummerCamp || DashBoard</title>
            </Helmet>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn bg-[#6a9955] text-white drawer-button lg:hidden">Open drawer</label>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-[#6a9955]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full">
                        {/* Sidebar content here */}
                        <li><NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart> My Selected Classes</NavLink></li>
                        <li><NavLink to="/dashboard/myEnroll"><FaWallet></FaWallet> My Enrolled Classes</NavLink></li>
                        <li><NavLink to="/dashboard/payment"><FaMoneyBill></FaMoneyBill> Payment History</NavLink></li>
                        <div className='divider'></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to="/instructors"><FaUser></FaUser> Instructors</NavLink></li>
                        <li><NavLink to="/classes"><FaBook></FaBook> Classes</NavLink></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;