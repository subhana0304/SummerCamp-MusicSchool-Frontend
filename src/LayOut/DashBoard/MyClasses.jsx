import React from 'react';
import UseClasses from '../../Hook/UseClasses';
import { Helmet } from 'react-helmet';

const MyClasses = () => {
    const [classes, refetch] = UseClasses();
    // console.log(classes);
    return (
        <div className='w-full p-10'>
            <Helmet>
                <title>SummerCamp || MyClasses</title>
            </Helmet>
            <div>
                <h3 className='text-3xl text-[#6a9955] font-semibold py-5'>My Classes</h3>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((item, index) =>
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
                                        <td>
                                            pending
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;