import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import grave from '../../../assets/banner/phone-graveyard.webp'

const DisplayError = () => {
    const { logout } = useContext(AuthContext)
    const error = useRouteError();
    const navigate = useNavigate();
    const handleLogOut = () => {
        logout()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.error())
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${grave})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Something Went Wrong</h1>
                    <p className="text-red-400">{error.statusText || error.message}</p>
                    <button onClick={handleLogOut} className="btn btn-primary">SignOut</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayError;