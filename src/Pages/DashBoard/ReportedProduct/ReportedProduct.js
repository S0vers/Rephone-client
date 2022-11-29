import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { MdDeleteForever } from 'react-icons/md';
import { AuthContext } from '../../../Context/AuthProvider';
import ConfirmModal from '../../Shared/ConfirmModal/ConfirmModal';
import Loading from '../../Shared/Loading/Loading';

const ReportedProduct = () => {
    const { logout } = useContext(AuthContext)
    const [deletingProduct, setDeletingProduct] = useState(null)
    const closeModal = () => {
        setDeletingProduct(null);
    }
    const url = 'http://localhost:5000/reportedproducts'
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
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
    const deleteProduct = product => {
        fetch(`http://localhost:5000/reportedproducts/${product._id}`, {
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
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-4xl font-bold text-center text-primary my-10">List of All the Reported Product</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <></>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.sellerEmail}</td>
                                <td><label onClick={() => setDeletingProduct(product)} htmlFor="confirm-Modal" className='hover:text-red-600 text-3xl text-center'><MdDeleteForever></MdDeleteForever></label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct &&
                <ConfirmModal
                    title={'Are you sure you want to delete the Seller?'}
                    message={`If you delete ${deletingProduct.name}. We can not bring back the Information it is gone forever`}
                    closeModal={closeModal}
                    successButtonName='Delete'
                    successAction={deleteProduct}
                    modalData={deletingProduct}
                >
                </ConfirmModal>
            }
        </div>
    );
};

export default ReportedProduct;