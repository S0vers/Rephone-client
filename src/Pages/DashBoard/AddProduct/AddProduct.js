import axios from 'axios';
import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const [catagories, setCatagory] = useState([]);
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imagebb_key;
    const handleAddProduct = data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const catagoryID = catagories.filter(catagory => catagory.brandName === data.category)
        console.log()
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        name: data.productName,
                        ProductImg: imgData.data.url,
                        Description: data.description,
                        YearOfPurchase: data.year,
                        reported: false,
                        postTime: format(new Date(), 'PP'),
                        yearsOfUse: data.yearsofuse,
                        resalePrice: data.sellPrice,
                        originalPrice: data.originalPrice,
                        sellerEmail: user.email,
                        sellerName: user.displayName,
                        condition: data.location,
                        sellerNumber: data.phone,
                        categoryName: data.category,
                        categoryId: catagoryID[0]._id,
                        Location: "Dhaka,Bangladesh",
                        advertise: false,
                        status: "available"
                    }
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success(`${data.productName} added successfully`)
                                //navigate('/dashboard/myproduct')
                            }
                        })
                }
            })

    }
    useEffect(() => {
        axios.get('http://localhost:5000/catagories')
            .then(function (response) {
                setCatagory(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [catagories])
    return (
        <div>
            <h3 className="text-4xl font-bold text-center text-primary mt-10">Add A Product</h3>
            <div className='mt-10 flex justify-center items-center '>
                <div className='w-96 p-7 shadow-xl'>
                    <form onSubmit={handleSubmit(handleAddProduct)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                className="input input-bordered w-full" defaultValue={user.displayName} disabled
                                {...register("name", {
                                })} />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                className="input input-bordered w-full" defaultValue={user.email} disabled
                                {...register("email", {
                                })} />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text"
                                className="input input-bordered w-full"
                                {...register("productName", {
                                    required: "Product Name is required"
                                })} />
                            {errors.productName && <p className="text-red-600">{errors.productName?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text"
                                className="input input-bordered w-full"
                                {...register("location", {
                                    required: "Location is required"
                                })} />
                            {errors.location && <p className="text-red-600">{errors.location?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Selling Price</span>
                            </label>
                            <input type="text"
                                className="input input-bordered w-full"
                                {...register("sellPrice", {
                                    required: "Selling Price is required",
                                })} />
                            {errors.sellPrice && <p className="text-red-600">{errors.sellPrice?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Original Price</span>
                            </label>
                            <input type="originalPrice"
                                className="input input-bordered w-full"
                                {...register("originalPrice", {
                                    required: "Original Price Address is required"
                                })} />
                            {errors.originalPrice && <p className="text-red-600">{errors.originalPrice?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Years Of Use</span>
                            </label>
                            <input type="yearsofuse"
                                className="input input-bordered w-full"
                                {...register("yearsofuse", {
                                    required: "Years of use is required"
                                })} />
                            {errors.yearsofuse && <p className="text-red-600">{errors.yearsofuse?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="phone"
                                className="input input-bordered w-full"
                                {...register("phone", {
                                    required: "phone Address is required"
                                })} />
                            {errors.phone && <p className="text-red-600">{errors.phone?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Year Of Purchase</span>
                            </label>
                            <input type="year"
                                className="input input-bordered w-full"
                                {...register("year", {
                                    required: "Year of Purchase is required"
                                })} />
                            {errors.year && <p className="text-red-600">{errors.year?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Describe the Product and why selling it."
                                {...register("description", {
                                    required: "Description is required"
                                })} ></textarea>
                            {errors.description && <p className="text-red-600">{errors.description?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image of your Phone</span>
                            </label>
                            <input type="file" className="file-input w-full max-w-xs" placeholder="Image of Phone."
                                {...register("image", {
                                    required: "Image is required"
                                })} />
                            {errors.image && <p className="text-red-600">{errors.image?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label htmlFor="func" className="form_label">
                                <span className="label-text">Condition</span>
                            </label>
                            <select className="select select-bordered w-full"
                                {...register("condition", {
                                })}
                            >
                                <option disabled selected>Choose Condition</option>
                                <option>Fair</option>
                                <option>Good</option>
                                <option>Excellent</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label htmlFor="func" className="form_label">
                                <span className="label-text">Brand</span>
                            </label>
                            <select className="select select-bordered w-full"
                                {...register("category", {
                                })}
                            >
                                <option disabled selected>Choose Brand</option>
                                {
                                    catagories.map(catagory =>
                                        <option key={catagory._id}>{catagory.brandName}</option>
                                    )
                                }
                            </select>
                        </div>
                        <input className='btn btn-primary w-full mt-10' value="Add Product" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;