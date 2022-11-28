import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CatagoryCard from './CatagoryCard';

const Catagory = () => {
    const url = 'http://localhost:5000/catagories'
    const { data: catagories, isLoading } = useQuery({
        queryKey: ['Categories'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })
    if (isLoading) {
        return
    }
    console.log(catagories)

    return (
        <div className='mt-10'>
            <h3 className="text-4xl font-bold text-center text-primary">Category/Brand</h3>
            <div className='mt-32 mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    catagories.map(catagory => <CatagoryCard
                        key={catagory._id}
                        catagory={catagory}
                    >
                    </CatagoryCard>)
                }
            </div>
        </div>
    );
};

export default Catagory;