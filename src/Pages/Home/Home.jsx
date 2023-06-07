import React from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SummerCamp || Home</title>
            </Helmet>
            <Slider></Slider>
            <h1>Hello from home</h1>
        </div>
    );
};

export default Home;