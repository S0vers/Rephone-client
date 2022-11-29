import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdVerified } from "react-icons/md";
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
const ProductCart = ({ product, setProduct }) => {
    const { logout } = useContext(AuthContext);
    const { name, Location, resalePrice, originalPrice, yearsOfUse, postTime, _id, sellerEmail, sellerName, ProductImg, Description } = product
    const [verified, setVerified] = useState(false);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (sellerEmail) {
            fetch(`http://localhost:5000/users?email=${sellerEmail}`)
                .then(res => res.json())
                .then(data => {
                    setVerified(data.isVerified)
                    setLoading(false)
                })
        }
    }, [sellerEmail])
    if (loading) {
        return <Loading></Loading>
    }
    const handleReport = _id => {
        fetch(`http://localhost:5000/products/${_id}`, {
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
                    toast.success('Product Reported.')
                }
                else {
                    toast('The product is already reported.')
                }
            })
    }
    return (
        <div className="card w-full lg:w-96 bg-blue-100 shadow-xl">
            <figure><img src={ProductImg} alt="Product" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p>Description: {Description}</p>
                <p>Location: {Location}</p>
                <p className='text-green-600'>Resale Price: ${resalePrice}</p>
                <p className='text-red-600'>Original Price: ${originalPrice}</p>
                <p>Years of Use: <span className='text-green-600'>{yearsOfUse} Years</span></p>
                <p>Posted On: {postTime}</p>
                <p className='flex items-center text-xl'>Seller: {sellerName}
                    {verified &&
                        <span className='text-blue-500 ml-5'><MdVerified></MdVerified></span>
                    }
                </p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleReport(_id)} className="btn btn-warning">Report Product</button>
                    <label className="btn btn-primary"
                        htmlFor="booking-modal"
                        onClick={() => setProduct(product)}
                    >
                        Book Product</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;