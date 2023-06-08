import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            updateUserProfile(data.name, data.photoUrl)
            .then(()=>{
                console.log('user profile info updated');
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign Up Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/');
            })
            .catch(error => console.log(error))
        })
        
    }

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
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="your name" className="input input-bordered" />
                            {errors.name?.type === 'required' && <span className='text-red-600'>Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" {...register("photoUrl", { required: true })} name='photoUrl' placeholder="Photo URL" className="input input-bordered" />
                            {errors.photoUrl?.type === 'required' && <span className='text-red-600'>PhotoUrl field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email?.type === 'required' && <span className='text-red-600'>Email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/ })} name='password' placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className='text-red-600'>Password field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters </span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must be a capital letter and a special characters like !,$,#,@,* </span>}
                        </div>
                        <input type="submit" className='btn bg-[#6a9955]' value="Sign Up" />
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

export default SignUp;