import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, []);

    const handleSelectedClass = item =>{
        console.log(item);
        if(user && user.email){
            const selectedClass = {itemId: item._id, name: item.name, image: item.image, shortDescription:item.shortDescription, description:item.description, availableSeats:item.availableSeats, instructorName: item.instructorName, price:parseInt(item.price), students:item.students, courseTime:item.courseTime, category:item.category, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your class has been Selected',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to selected the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }

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
                            <div key={item._id} className="card w-full bg-base-100 shadow-xl">
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
                                        <button onClick={()=>handleSelectedClass(item)}  className="btn bg-[#6a9955] text-white">Select</button>
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