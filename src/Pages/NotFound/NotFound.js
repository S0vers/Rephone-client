import React from 'react';
import { Link } from 'react-router-dom';
import grave from '../../assets/banner/phone-graveyard.webp'

const NotFound = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${grave})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">404 Not Found</h1>
                    <p className="mb-5">Are you lost? Go back to home page!</p>
                    <Link to='/'><button className="btn btn-primary">Go Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;