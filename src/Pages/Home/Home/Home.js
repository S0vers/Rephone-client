import React from 'react';
import Advetisment from '../Advetisment/Advetisment';
import Banner from '../Banner/Banner';
import Catagory from '../Catagories/Catagory';
import WasteCount from '../WasteCount/WasteCount';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            {
                <Advetisment></Advetisment>
            }
            <WasteCount></WasteCount>
        </div>
    );
};

export default Home;