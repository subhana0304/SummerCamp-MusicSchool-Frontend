import React from 'react';
import { Helmet } from 'react-helmet';
import UseCarts from '../../Hook/UseCarts';
import { FaTrash } from 'react-icons/fa';

const MyCart = () => {
    const [cart] = UseCarts();
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>SummerCamp || MyCart</title>
            </Helmet>
            <div className='uppercase font-semibold my-5 flex justify-between h-[60px] items-center'>
                <h1 className='text-xl'>Total Items: {cart.length}</h1>
                <h1 className='text-xl'>Total Price: ${totalPrice}</h1>
                <button className='btn bg-[#6a9955] text-white'>Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Students</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>
                            <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>${item.price}</td>
                                <td className='text-center'>{item.students}</td>
                                <td>
                                    <button className="btn bg-red-600 text-white"><FaTrash></FaTrash></button>
                                </td>
                            </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;