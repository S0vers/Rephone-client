import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Checkout = ({ booking }) => {
    const { price, _id, productId, buyerEmail, ProductName, buyerName } = booking;
    console.log(booking);
    const [clientSecret, setClientSecret] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionID, setTransactionID] = useState('')
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [price]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError(' ')
        }
        setSuccess(' ');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === 'succeeded') {
            const payment = {
                price,
                transactionID: paymentIntent.id,
                buyerEmail,
                productId: productId,
                bookingId: _id
            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congratulations! Payment Successful.')
                        toast.success('Congratulations! Payment Successful.')
                        setTransactionID(paymentIntent.id)
                    }
                })
        }
        setProcessing(false);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm mt-4 btn-primary'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success &&
                <div>
                    <p className="text-green-500">{success}</p>
                    <p>Your trasactionID: <span className='font-bold'>{transactionID}</span></p>
                </div>
            }
        </>
    );
};

export default Checkout;