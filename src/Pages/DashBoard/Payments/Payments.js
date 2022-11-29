import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Checkout from './Checkout';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payments = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-4xl font-bold text-center text-primary my-10">Payment for {booking.ProductName}</h3>
            <h3 className="text-2xl font-bold text-center text-secondary my-10">You need to pay ${booking.price}</h3>
            <div className='flex justify-center items-center'>
                <div className="card w-full lg:w-[500px] bg-blue-100 shadow-xl ">
                    <div className="card-body ">
                        <Elements stripe={stripePromise}>
                            <Checkout
                                booking={booking}
                            ></Checkout>
                        </Elements>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payments;