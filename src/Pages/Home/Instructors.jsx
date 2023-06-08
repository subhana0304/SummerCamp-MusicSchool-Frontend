import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Aos from 'aos';
import "aos/dist/aos.css";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(()=>{
        Aos.init({duration:3000});
    },[])

    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    // console.log(instructors);

    return (
        <div className='text-center mx-auto'>
            <div className='text-center mt-20'>
                <h3 className='text-3xl font-semibold text-[#6a9955]'>---Popular Instructors---</h3>
                <p>Explore several art forms as your life builds creativity and <br /> confidence in our new visual arts classes for all ages</p>
            </div>
            <div className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    instructors.map(instructor =>
                        <div data-aos="fade-up" key={instructor.id} className='mx-auto justify-center'>
                            <img className='rounded-full w-[250px] h-[250px] p-3 border border-[#6a9955] hover:border-8 hover:p-1 duration-75' src={instructor.image} alt="" />
                            <h3 className='text-2xl font-bold mt-5'>{instructor.name}</h3>
                            <h5 className='text-xl'>{instructor.instrument}</h5>
                            <div className='flex justify-center space-x-3 mt-3 text-xl text-[#6a9955]'>
                                <FaFacebook /><FaInstagram /><FaTwitter />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Instructors;