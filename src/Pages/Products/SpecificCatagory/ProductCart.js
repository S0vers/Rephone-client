import React, { useEffect, useState } from 'react';
import { MdVerified } from "react-icons/md";
import Loading from '../../Shared/Loading/Loading';
const ProductCart = ({ product, setProduct }) => {
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
                    <button className="btn btn-warning">Report Product</button>
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