import React from 'react';
import bannerImg from '../../../assets/banner/banner.jpeg'
const Banner = () => {
    return (
        <div className="hero h-96 lg:h-[660px]" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to <span className='text-primary'>RePhone</span></h1>
                    <p className="mb-5">one mans junk is another man's treasure.  So sell your old unused phone for the right price and let your old phone make new memory for others as it did for you. </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;