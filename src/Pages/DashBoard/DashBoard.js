import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const DashBoard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='my-10'>
            <h3 className="text-4xl font-bold text-center text-primary">Welcome To Dashboard {user.displayName}</h3>
        </div>
    );
};

export default DashBoard;