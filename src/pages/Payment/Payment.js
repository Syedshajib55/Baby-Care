import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';
import useAuth from '../../hooks/useAuth';

const stripePromise = loadStripe('pk_test_51Jw3cjBp5UogvPzO9ZMrJsgf9bnSPAym5VKFPApp5zWWwPRkng9VJDVO8gm46ooZjvvMbtLgbLCbufarlz3KzkxO000XV1UJlU')
const Payment = () => {
    const { id } = useParams()
    const { user } = useAuth()
    const [products, setProducts] = useState([])
    const [payment, setPayment] = useState({})
   
    let total = products.reduce((total, item) => Number(item.price * item.Quantity) + total, 0)
    
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email])

    useEffect(() => {
        fetch(`http://localhost:5000/payment/${id}`)
            .then(res => res.json())
            .then(data => {setPayment(data)
            })
    }, [id])
    return (
        <div>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-2 gap0">
                    <div className="payment-box">
                        <h2 className='text-4xl font-semibold my-5 capitalize'>Confirm your payment</h2>
                        {/* <p>Product Id: {id}</p> */}
                        {/* <p>Product is <span className='font-semibold'>{payment.title}</span></p> */}
                        <h3 className='font-semibold text-2xl mb-5'>Price ${total}</h3>
                        {payment?.price && <Elements stripe={stripePromise}>
                            <CheckOutForm total={total} payment={payment} />
                        </Elements>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;