import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEyeSlash } from "@react-icons/all-files/bs/BsEyeSlash";
import BreadCrumb from '../../Shared/BreadCrumb';
import Meta from '../../Shared/Meta';

const Signin = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <>
            <Meta title={"Sign In"} />
            <BreadCrumb title="Sign In" />
            <div className='pb-16 lg:px-0 md:px-0 px-4'>
                < div className="lg:w-[500px] md:w-[500px] w-full p-8 mx-auto border-2 border-gray-200 bg-white items-center text-center shadow-sm">
                    <h1 className='textxl font-bold py-4'>Login</h1>
                    <form onSubmit="" >
                        <input
                            className="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                            placeholder='Email'
                            type="text" />
                        <div className='relative'>
                            <input
                                placeholder="Password"
                                className="mb-1 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 outline-gray-300"
                                type={showPass ? "text" : "password"}
                            />
                            <p className="absolute top-3 right-5 cursor-pointer" onClick={() => setShowPass(!showPass)}><BsEyeSlash /></p>
                        </div>
                        <div className="text-center mb-3 pb-1 justify-between">
                            <label htmlFor="remember" className="text-sm font-medium text-primary mb-2">Don't Have an account? <Link to='/signup' className='hover:underline'>Sign Up</Link></label>
                            <br /> <button className=" hover:underline text-gray-400 mt-3">Forgot password?</button>
                        </div>
                        <input
                            className="border border-gray-300 bg-primary text-white text-sm uppercase font-bold rounded-lg block w-full p-2.5"
                            type="submit" value="Sign In" />

                    </form>
                    <div className='flex font-bold items-center my-3 text-primary'>
                        <hr className='border-primary h-px w-full mr-2 mt-1' />
                        <span>or</span>
                        <hr className='border-primary h-px w-full ml-2 mt-1' />
                    </div>
                    <button className="flex items-center justify-center bg-gray-50 border font-bold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 w-full p-2.5"> <img className='w-6 pr-2' src="" alt='' /> Continue with Google</button>
                </div>
            </div>
        </>
    );
};

export default Signin;