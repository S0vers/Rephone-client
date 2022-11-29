import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDeleteForever } from 'react-icons/md';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
    const { logout } = useContext(AuthContext)
    const [deletingbuyer, setDeletingbuyer] = useState(null)
    const closeModal = () => {
        setDeletingbuyer(null);
    }
    const url = 'https://rephone-server.vercel.app/users/buyer'
    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
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
    const deleteBuyer = buyer => {
        fetch(`https://rephone-server.vercel.app/users/${buyer._id}`, {
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
                    toast.success('buyer Deleted SuccessFully')
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
                            <th></th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td></td>
                                <td><label onClick={() => setDeletingbuyer(buyer)} htmlFor="confirm-Modal" className='hover:text-red-600 text-3xl text-center'><MdDeleteForever></MdDeleteForever></label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingbuyer &&
                <ConfirmModal
                    title={'Are you sure you want to delete the Seller?'}
                    message={`If you delete ${deletingbuyer.name}. We can not bring back the user Information it is gone forever`}
                    closeModal={closeModal}
                    successButtonName='Delete'
                    successAction={deleteBuyer}
                    modalData={deletingbuyer}
                >
                </ConfirmModal>
            }
        </div>
    );
};

export default AllBuyers;