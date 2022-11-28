
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import { MdDeleteForever } from 'react-icons/md';
import { MdVerified } from "react-icons/md";
const Allsellers = () => {
    const { logout } = useContext(AuthContext)
    const url = 'http://localhost:5000/users/seller'
    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            if (res.status === 401 || res.status === 403) {
                return logout();
            }
            return data;
        }
    })
    console.log(sellers)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
            <h3 className="text-4xl font-bold text-center text-primary my-10">List of all the Sellers</h3>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Verification</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map((seller, i) => <tr key={seller._id}>
                            <th>{i + 1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td>{seller?.isVerified ?
                                <p className='text-3xl text-blue-400'><MdVerified></MdVerified></p>
                                :
                                <button className='text-white btn btn-xs bg-green-400 hover:bg-blue-400 border-none'>Verify Seller</button>
                            }</td>
                            <td><label htmlFor="confirmation-modal" className='hover:text-red-600 text-3xl text-center'><MdDeleteForever></MdDeleteForever></label></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Allsellers;