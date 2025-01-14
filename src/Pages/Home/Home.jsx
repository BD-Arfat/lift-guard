import React from 'react';
import Banner from './Banner/Banner';
import Abouts from './Abouts/Abouts';
import Service from './Service/Service';
import Why_us from './Why_us/Why_us';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Abouts></Abouts>
            <Service></Service>
            <Why_us></Why_us>
        </div>
    );
};

export default Home;