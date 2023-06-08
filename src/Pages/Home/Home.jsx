import React from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet';
import Populars from './Populars';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SummerCamp || Home</title>
            </Helmet>
            <Slider></Slider>
            <Populars></Populars>
            <h1>Hello from home</h1>
        </div>
    );
};

export default Home;