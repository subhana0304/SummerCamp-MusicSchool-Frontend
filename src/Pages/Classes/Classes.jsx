import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Classes = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('popular.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);
    return (
        <div>
            <Helmet>
                <title>SummerCamp || Classes</title>
            </Helmet>
            <div className='py-20'>
                <div className='text-center mt-10'>
                    <h3 className='text-3xl font-semibold text-[#6a9955]'>---Our Classes---</h3>
                    <p>Explore several art forms as your life builds creativity and <br /> confidence in our new visual arts classes for all ages</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-10'>
                    {
                        classes.map(item =>
                            <div key={item.id} className="card w-full bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={item.image} alt="Shoes" className="rounded-xl h-full" />
                                </figure>
                                <div className="items-center text-center space-y-2 py-5">
                                    <h2 className="card-title text-3xl text-center justify-center">{item.name}</h2>
                                    <p className='text-xl'>Instructor: {item.instructorName}</p>
                                    <div className='flex space-x-4 justify-center'>
                                    <p>Instructor: {item.availableSeats}</p>
                                    <p>Price: ${item.price}</p>
                                    </div>
                                    <div className="card-actions justify-center">
                                        <button className="btn bg-[#6a9955] text-white">Select</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;