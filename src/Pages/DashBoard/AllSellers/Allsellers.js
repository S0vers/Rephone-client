
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const Allsellers = () => {
    const { logout } = useContext(AuthContext)
    const url = 'http://localhost:5000/users/seller'
    const { data: seller, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            if (res.status === 401 || res.status === 403) {
                console.log('HIT')
            }
            return data;
        }
    })
    console.log(seller)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            This is all sellers.
        </div>
    );
};

export default Allsellers;