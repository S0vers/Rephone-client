import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthProvider";
import UseToken from '../../hooks/UseToken';
const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = UseToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/';
    if (token) {
        navigate(from, { replace: true })
    }
    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                setLoginUserEmail(data.email)
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })


    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 shadow-xl'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            className="input input-bordered w-full "
                            {...register("email", {
                                required: "Email Address is required"
                            })} />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full "
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be atleast 6 characters or longer." }
                            })} />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full my-5' value="Login" type="submit" />
                    <div>
                        {loginError && <p className="text-red-600">{loginError}</p>}
                    </div>
                </form>
                <p>New to RePhone? <Link className='text-secondary' to='/signup'>Create account</Link></p>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full text-2xl flex items-center my-10'>Login In With <span className='pl-4 text-yellow-400'><FaGoogle></FaGoogle></span></button>
            </div>
        </div>
    );
};

export default Login;