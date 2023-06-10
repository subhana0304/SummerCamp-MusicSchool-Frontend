import React from 'react';
import { Helmet } from 'react-helmet';

const AddClasses = () => {
    return (
        <div className='w-full text-center'>
            <Helmet>
                <title>SummerCamp || AddClass</title>
            </Helmet>
            <div>
                <h3 className='text-3xl text-[#6a9955]'>Add a Classes</h3>
            </div>
        </div>
    );
};

export default AddClasses;