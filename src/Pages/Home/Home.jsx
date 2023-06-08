import React from 'react';
import Slider from './Slider';
import { Helmet } from 'react-helmet';
import Populars from './Populars';
import Arts from './Arts';
import Instructors from './Instructors';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SummerCamp || Home</title>
            </Helmet>
            <Slider></Slider>
            <Populars></Populars>
            <Arts></Arts>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;