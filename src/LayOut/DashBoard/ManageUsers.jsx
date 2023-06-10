import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaUser, FaUserShield } from 'react-icons/fa';

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    });
    return (
        <div className='w-full'>
            <Helmet>
                <title>SummerCamp || ManageUsers</title>
            </Helmet>
            <div>
                <h3 className='text-3xl font-semibold'>Total Users: {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Instructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className='text-xl mx-auto'>{user.role === 'admin' ? 'admin' : <button onClick={()=>handleAdmin(item)} className="btn bg-[#6a9955] text-white"><FaUserShield></FaUserShield></button>}</td>
                                    <td className='text-xl mx-auto'>{user.role === 'instructor' ? 'instructor' : <button onClick={()=>handleInstructor(item)} className="btn bg-[#6a9955] text-white"><FaUser></FaUser></button>}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;