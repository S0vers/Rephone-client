import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import UseToken from '../../hooks/UseToken';

const Signup = () => {
    const { createUser, updateUser, googleSignIn } = useContext(AuthContext)
    const [signUpError, setSignUperror] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createduserEmail, setCreatedEmail] = useState('')
    const [token] = UseToken(createduserEmail);
    const location = useLocation();
    const from = location.state?.from.pathname || '/';
    const navigate = useNavigate();
    if (token) {
        navigate(from, { replace: true })
    }
    const handleSignup = data => {
        setSignUperror('')
        createUser(data.email, data.password)
            .then(result => {
                toast.success('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)
                        navigate(from, { replace: true })
                    })
                    .catch(error => {
                        setSignUperror(error.message)
                    })
            })
    }
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedEmail(email);
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.email
                const role = 'buyer'
                const name = user.displayName
                const email = user.email
                saveUser(name, email, role)
                navigate(from, { replace: true })
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 shadow-xl'>
                <h2 className='text-xl text-center'>Signup</h2>
                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            className="input input-bordered w-full"
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
                            className="input input-bordered w-full"
                            {...register("email", {
                                required: "Email Address is required"
                            })} />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label htmlFor="func" className="form_label">
                            <span className="label-text">Type Of User</span>
                        </label>
                        <select className="select select-bordered w-full"
                            {...register("role", {
                            })}
                        >
                            <option selected>Buyer</option>
                            <option>Seller</option>
                        </select>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be atleast 6 characters or longer." },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
                            })} />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full mt-10' value="Signup" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already and user<Link className='text-secondary' to='/login'> Login</Link></p>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full text-2xl flex items-center my-10'>Sign up With <span className='pl-4 text-yellow-400'><FaGoogle></FaGoogle></span></button>
            </div>
        </div>
    );
};

export default Signup;