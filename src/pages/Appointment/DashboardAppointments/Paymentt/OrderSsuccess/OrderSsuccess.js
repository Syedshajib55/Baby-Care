import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';

const OrderSsuccess = () => {
    const [products, setProducts] = useState([])
    const { user } = useAuth

    

    
    return (
        <div>
            <div className="container mx-auto py-10 text-center">
               
                <h2 className='text-4xl text-center font-semibold py-5 mb-8'>Thanks for taking the service.</h2>
                <Link to='/appointment'>
                    <button className='bg-red-500 text-white px-6 py-2 text-center'>Take another appointment</button>
                </Link>
                
            </div>
        </div>
    );
};

export default OrderSsuccess;