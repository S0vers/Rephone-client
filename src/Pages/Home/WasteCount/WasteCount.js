import React from 'react';
import ewaste from '../../../assets/banner/ewaste.jpg'
import { FiSmartphone } from "react-icons/fi";
import { FaLeaf } from 'react-icons/fa';
const WasteCount = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${ewaste})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content text-center">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="py-6 ">Every year we are producing an immense amount of Electronic waste that gets added to the land.This year alone <span className='text-warning font-bold text-xl'>51 Billions</span> new phones are added to the Electronic waste.  To produce the products we are depleting our Earth of it's resources. We need to go green and reuse and reduce our wastes. So as a promise <span className='text-primary font-bold text-xl'> For every phone sold we will plant a tree.</span> </p>
                    <div className="stats stats-vertical lg:stats-horizontal shadow bg-opacity-60">

                        <div className="stat">
                            <div className="stat-title text-blue-500"><FiSmartphone></FiSmartphone></div>
                            <div className="stat-value">5000</div>
                            <div className="stat-desc">Phones Sold</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title text-green-700"><FaLeaf></FaLeaf></div>
                            <div className="stat-value">4,900</div>
                            <div className="stat-desc">Trees Planted</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default WasteCount;