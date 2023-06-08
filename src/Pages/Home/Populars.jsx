import React, { useEffect, useState } from 'react';

const Populars = () => {
    const [populars, setPopulars] = useState([]);

    useEffect(()=>{
        fetch('popular.json')
        .then(res => res.json())
        .then(data => setPopulars(data))
    },[])
    // console.log(populars);

    return (
        <>
        <div className='text-center mt-10'>
            <h3 className='text-3xl font-semibold text-[#6a9955]'>---Popular Classes---</h3>
            <p>Explore several art forms as your child builds creativity and <br /> confidence in our new visual arts classes for all ages</p>
        </div>
        <div className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                populars.map(popular => 
                <div key={popular.id} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={popular.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-semibold">{popular.name}</h2>
                  <p className='text-xl'>{popular.shortDescription}</p>
                  <div className='card-actions justify-between items-center'>
                  <div className="justify-start">
                    <p className=''>{popular.students}</p>
                    <p className=''>{popular.courseTime}</p>
                  </div>
                  <div className="justify-end">
                  <p className='text-[#6a9955]'>Price: ${popular.price}</p>
                  </div>
                  </div>
                </div>
              </div>
              )
            }
        </div>
        </>
    );
};

export default Populars;