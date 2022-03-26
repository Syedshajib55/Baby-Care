import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51Jw3cjBp5UogvPzO9ZMrJsgf9bnSPAym5VKFPApp5zWWwPRkng9VJDVO8gm46ooZjvvMbtLgbLCbufarlz3KzkxO000XV1UJlU')
const Payment = () => {
    const { id } = useParams()
    const [payment, setpayment] = useState({})

    useEffect(() => {
        fetch(`https://fierce-earth-16415.herokuapp.com/payment/${id}`)
            .then(res => res.json())
            .then(data => setpayment(data))
    }, [id])
    return (
        <div>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-2 gap0">
                    <div className="payment-box">
                        <h2 className='text-4xl font-semibold my-5 capitalize'>Confirm your payment</h2>
                        <p>Product Id: {id}</p>
                        <p>Product is <span className='font-semibold'>{payment.title}</span></p>
                        <h3 className='font-semibold text-2xl mb-5'>Price ${payment.price}</h3>
                        {payment?.price && <Elements stripe={stripePromise}>
                            <CheckOutForm payment={payment} />
                        </Elements>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;