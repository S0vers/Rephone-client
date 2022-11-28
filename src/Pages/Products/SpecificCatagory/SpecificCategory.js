import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCart from './ProductCart';

const SpecificCategory = () => {
    const products = useLoaderData();
    const productName = products[0].categoryName;
    return (
        <div className='my-10'>
            <h3 className="text-4xl font-bold text-center text-primary">This are the {productName} Products</h3>
            <div className='mt-32 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCart
                        key={product._id}
                        product={product}
                    >
                    </ProductCart>)
                }
            </div>
        </div>
    );
};

export default SpecificCategory;