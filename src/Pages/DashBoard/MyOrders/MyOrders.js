import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user, logout } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user.email}`
    const { data: bookings, isLoading, refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            if (res.status === 401 || res.status === 403) {
                return logout();
            }
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className="text-4xl font-bold text-center text-primary my-10">List of all My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={booking.ProductImg} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{booking.ProductName}</td>
                                <td>{booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid &&
                                        <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-sm bg-green-600 border-none text-white text-center'>
                                                PAY
                                            </button>
                                        </Link>
                                    }
                                    {
                                        booking.paid && booking.price &&
                                        <span className='text-secondary'>PAID</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;