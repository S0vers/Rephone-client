import React from 'react';
import { Link } from 'react-router-dom';

const CatagoryCard = ({ catagory }) => {
    const { brandName, brandIcon, _id } = catagory
    return (
        <div className="card mx-auto w-full lg:w-96 bg-blue-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={brandIcon} alt="Shoes" className="rounded-xl w-32" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">{brandName}</h2>
                <p>CheckOut the phones that are sell from {brandName}.</p>
                <div className="card-actions">
                    <Link to={`/category/${_id}`}><button className="btn btn-primary">Products!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CatagoryCard;