import React from 'react';
import { Helmet } from 'react-helmet';

const SignUp = () => {
    return (
        <div>
            <Helmet>
                <title>SummerCamp || SignUp</title>
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered" />
                            </div>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <input type="submit" className='btn bg-[#EFCF4F]' value="Sign Up" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;