import React from 'react';
import Advetisment from '../Advetisment/Advetisment';
import Banner from '../Banner/Banner';
import Catagory from '../Catagories/Catagory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            {
                <Advetisment></Advetisment>
            }
        </div>
    );
};

export default Home;