import React from 'react';
import { MdVerified } from "react-icons/md";
const ProductCart = ({ product }) => {
    const { name, Location, resalePrice, originalPrice, yearsOfUse, postTime, _id, sellerEmail, sellerName, ProductImg, Description } = product
    return (
        <div className="card w-full lg:w-96 bg-blue-100 shadow-xl">
            <figure><img src={ProductImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p>Description: {Description}</p>
                <p>Location: {Location}</p>
                <p className='text-primary'>Resale Price: ${resalePrice}</p>
                <p>Original Price: ${originalPrice}</p>
                <p>Years of Use: {yearsOfUse} Years</p>
                <p>Posted On: {postTime}</p>
                <p className='flex items-center text-xl'>Seller: {sellerName} {<span className='text-blue-500 ml-5'><MdVerified></MdVerified></span>}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning">Report Product</button>
                    <button className="btn btn-primary">Book Product</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;