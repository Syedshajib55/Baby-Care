import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForms from './CheckoutForms/CheckoutForms';

const stripePromise = loadStripe('pk_test_51Jw3cjBp5UogvPzO9ZMrJsgf9bnSPAym5VKFPApp5zWWwPRkng9VJDVO8gm46ooZjvvMbtLgbLCbufarlz3KzkxO000XV1UJlU')

const Paymentt = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId]);
    return (
        <div>
            <h2 className='text-center text-xl'>Hey, <p className='text-green-700'>{appointment.patientName}</p> Please pay for {appointment.serviceName} service. </h2>
            <h4 className='text-center text-xl m-5 text-red-700'>Pay: ${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForms
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Paymentt;

/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-----
5. Create Paymentt method
6. server: create Paymentt Intent api
7. Load client secret
8. ConfirmCard Paymentt
9. handle user error
*/