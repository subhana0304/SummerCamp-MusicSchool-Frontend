import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>SummerCamp || Login</title>
            </Helmet>
            <div className="hero min-h-screen pt-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="md:w-1/2 lg:text-left">
                        <img src="../../public/login.jpg" alt="" />
                    </div>
                    <div className="card mx-10 md:w-1/2 bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <input type="submit" className='btn bg-[#EFCF4F]' value="Sign Up" />
                            <label className="label">
                                    <span>Don't have an account? <Link to="/signUp" className='text-[#EFCF4F] link-hover'>Sign Up</Link></span>
                                </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;