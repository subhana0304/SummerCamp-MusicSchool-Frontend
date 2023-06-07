import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'Login Successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              navigate(from, {replace: true});
        })
        reset();
    }

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
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password")} name='password' className="input input-bordered" />
                            </div>
                            <input type="submit" className='btn bg-[#EFCF4F]' value="Login" />
                            <label className="label">
                                    <span>Don't have an account? <Link to="/signUp" className='text-[#EFCF4F] link-hover'>Sign Up</Link></span>
                                </label>
                        </form>
                        <div className='mx-auto'>
                            <button className='btn btn-outline'><FaGoogle></FaGoogle> SignIn with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;