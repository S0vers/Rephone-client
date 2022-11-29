import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import ProductCart from './ProductCart';

const SpecificCategory = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState(null);
    const productName = products[0].categoryName;
    return (
        <div className='my-10'>
            <h3 className="text-4xl font-bold text-center text-primary">This are the {productName} Products</h3>
            <div className='mt-32 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCart
                        key={product._id}
                        product={product}
                        setProduct={setProduct}
                    >
                    </ProductCart>)
                }
            </div>
            {
                product &&
                <BookingModal
                    product={product}
                    setProduct={setProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default SpecificCategory;