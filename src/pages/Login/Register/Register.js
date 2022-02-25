import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import { FcGoogle } from 'react-icons/fc'

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser, signInWithGoogle } = useFirebase()

    // 
    const location = useLocation()
    const history = useHistory()

    const onSubmit = data => {
        if (data.password !== data.password2) {
            alert("password didn't match.")
            return
        }
        registerUser(data.email, data.password, data.name, history)
        console.log(data);
    }
    const handleGoogle = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                <div className="grid grid-cols-1-gap-4">
                    <div className="login-form w-full lg:w-1/2 mx-auto">
                        <h2 className='text-center text-4xl mb-5 font-semibold'>Register Now</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("name", { required: true })} placeholder='Your Name' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("email", { required: true })} type='email' placeholder='Email' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("password", { required: true })} type='password' placeholder='Password' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("password2", { required: true })} type='password' placeholder='Re-enter Password' /> <br />
                            {/* errors will return when field validation fails  */}
                            {errors.name || errors.email || errors.password || errors.password2 ? <span className='text-red-500 font-semibold  pl-5 mb-3'>Please fill all the input correctly!</span> : ""}

                            <input className='border-2 border-red-400 px-14 font-semibold text-xl cursor-pointer rounded-full bg-white mx-auto block text-red-400 py-2 mt-3' type="submit" value='Register' />
                        </form>
                        <h4 className='text-3xl text-center my-5 font-semibold'><span className='lg:w-52 w-20 h-1 bg-red-200 inline-block'></span> Or <span className='lg:w-52 w-20 h-1 bg-red-200 inline-block'></span></h4>
                        <div className='text-center'>
                            <button onClick={handleGoogle} className='text-2xl mb-5 shadow px-5 py-1 rounded-lg font-medium'>Continue with <FcGoogle className='inline-block' /></button>
                            <h3 className='text-center'>Have an account? <Link to='/login' className='text-red-500 underline'>Sign In</Link></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;