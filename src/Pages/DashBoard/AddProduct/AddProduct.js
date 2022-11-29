import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const [catagories, setCatagory] = useState([]);
    const [selectedcatagory, setSelectedcatagory] = useState([])
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
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                className="input input-bordered w-full" defaultValue={user.displayName} disabled
                                {...register("name", {
                                    required: "Name is required"
                                })} />
                            {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                className="input input-bordered w-full" defaultValue={user.email} disabled
                                {...register("email", {
                                    required: "Email Address is required"
                                })} />
                            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
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
                                    required: "yearsofuse Address is required"
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
                                    required: "phone Address is required"
                                })} />
                            {errors.year && <p className="text-red-600">{errors.year?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Describe the Product and why selling it."
                                {...register("description", {
                                    required: "Email Address is required"
                                })} ></textarea>
                            {errors.description && <p className="text-red-600">{errors.description?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image of your Phone</span>
                            </label>
                            <input type="file" className="file-input w-full max-w-xs" placeholder="Image of Phone."
                                {...register("image", {
                                    required: "Email Address is required"
                                })} />
                            {errors.image && <p className="text-red-600">{errors.image?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label htmlFor="func" className="form_label">
                                <span className="label-text">Condition</span>
                            </label>
                            <select className="select select-bordered w-full"
                                {...register("role", {
                                })}
                            >
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
                                {
                                    catagories.map(catagory =>
                                        <option onBlur={() => setSelectedcatagory(catagory)} key={catagory._id}>{catagory.brandName}</option>
                                    )
                                }
                            </select>
                        </div>
                        <input className='btn btn-primary w-full mt-10' value="Signup" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;