import React from 'react';

const AdvetismentCard = ({ Advetisment }) => {
    const { ProductImg, name, resalePrice } = Advetisment
    return (
        <div className="card mx-auto w-full lg:w-96 bg-blue-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={ProductImg} alt="Shoes" className="rounded-xl w-64" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">{name}</h2>
                <p className='text-green-600'>Price: ${resalePrice}</p>
            </div>
        </div>
    );
};

export default AdvetismentCard;