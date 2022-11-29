
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import { MdDeleteForever } from 'react-icons/md';
import { MdVerified } from "react-icons/md";
import toast from 'react-hot-toast';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';
const Allsellers = () => {
    const { logout } = useContext(AuthContext)
    const [deletingSeller, setDeletingSeller] = useState(null)
    const closeModal = () => {
        setDeletingSeller(null);
    }
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
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleVerifySeller = id => {
        fetch(`http://localhost:5000/users/verifySeller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast.error('There was a error!')
                    return logout()
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller is successfully verified.')
                    refetch()
                }
            })
    }
    const deleteSeller = seller => {
        fetch(`http://localhost:5000/users/${seller._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout()
                }
                return res.json()
            })
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Seller Deleted SuccessFully')
                }
            })
    }
    return (
        <div>
            <h3 className="text-4xl font-bold text-center text-primary my-10">List of all the Sellers</h3>
            <div className="overflow-x-auto">
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
                                    <button onClick={() => handleVerifySeller(seller._id)} className='text-white btn btn-xs bg-green-400 hover:bg-blue-400 border-none'>Verify Seller</button>
                                }</td>
                                <td><label onClick={() => setDeletingSeller(seller)} htmlFor="confirm-Modal" className='hover:text-red-600 text-3xl text-center'><MdDeleteForever></MdDeleteForever></label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingSeller &&
                <ConfirmModal
                    title={'Are you sure you want to delete the Seller?'}
                    message={`If you delete ${deletingSeller.name}. We can not bring back the user Information it is gone forever`}
                    closeModal={closeModal}
                    successButtonName='Delete'
                    successAction={deleteSeller}
                    modalData={deletingSeller}
                >
                </ConfirmModal>
            }
        </div>
    );
};

export default Allsellers;