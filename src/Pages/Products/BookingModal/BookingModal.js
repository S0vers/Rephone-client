import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext)
    const { name, resalePrice, _id, ProductImg } = product;
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const submitDate = format(new Date(), 'PP');
        const ProductName = form.productname.value;
        const buyerName = form.name.value;
        const price = form.price.value;
        const buyerEmail = form.email.value;
        const buyerPhone = form.phone.value;
        const productId = _id;
        const location = form.location.value;
        const booking = {
            submitDate,
            ProductName,
            buyerName,
            price,
            buyerEmail,
            buyerPhone,
            productId,
            location,
            ProductImg
        }
        fetch('https://rephone-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setProduct(null);
                    toast.success('Product Booked.')
                    form.reset();
                }
                else {
                    toast.error(data.message)
                    setProduct(null);
                    form.reset();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='productname' type="text" defaultValue={name} className="input input-bordered w-full" disabled />
                        <input name='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full" disabled />
                        <input name='price' type="text" defaultValue={resalePrice} className="input input-bordered w-full" disabled />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address" className="input input-bordered w-full" disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Meetup Location" className="input input-bordered w-full" />
                        <br />
                        <input htmlFor="booking-modal" className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;