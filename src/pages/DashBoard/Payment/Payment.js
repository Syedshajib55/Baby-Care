import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Payment = () => {
    const [product, setProduct] = useState({})
    const { user } = useAuth()
    const { id } = useParams();
    const history = useHistory()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.title = product.name
        data.price = product.price
        data.status = 'pending'
        fetch('https://salty-beyond-08378.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    history.push(`/payment-method/${data.insertedId}`)
                    reset()
                }
            })
    }
    return (
        <div>
            {/* <h2 className='text-4xl py-16 text-center font-semibold text-red-500'>Payment Method Is coming soon.</h2> */}
            <div className="puchase-info-form">
                        <h2 className='text-4xl capitalize font-semibold mb-10 text-center mt-10 lg:mt-0'>Fill up the form to buy</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("name", { required: true })} placeholder='Your Name' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' defaultValue={user.email} {...register("email", { required: true })} placeholder='Email' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("address", { required: true })} placeholder='Your Address' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("city", { required: true })} placeholder='City' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("phone", { required: true })} type='number' placeholder='Your Phone Number' /> <br />
                            {/* errors will return when field validation fails  */}
                            {errors.name || errors.email || errors.address || errors.city || errors.phone ? <span className='text-red-500 font-semibold  pl-5 mb-3'>Please fill all the input correctly!</span> : ""}

                            <input className='border-2 border-red-400 px-14 font-semibold text-xl cursor-pointer rounded-full bg-white mx-auto block text-red-400 py-2 mt-3' type="submit" value='Continue Payment' />
                        </form>
                        <div>
                            <p className='text-black-500 mt-10 px-10'> {`/*`} Please use the demo card number <span className='font-bold'>4242 4242 4242 4242</span> then you can use any future date and in cvc type 5 digit {`*/`}</p>
                        </div>
                    </div>
        </div>
    );
};

export default Payment;