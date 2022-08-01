import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const OrderSuccess = () => {
    const [products, setProducts] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email])

    const handleStatus1 = (id) => {
        fetch(`http://localhost:5000/updateStatus1/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' }
        }).then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    window.location.reload(true)
                }
            })
    }
    return (
        <div>
            <div className="container mx-auto py-10 text-center">
                {
                    products.map((item) => {
                        if(item.status === 'pending')
                        handleStatus1(item._id)
                    }) 
                }
                <h2 className='text-4xl text-center font-semibold py-5 mb-8'>Thanks for your order. We will deliver your product asap.</h2>
                <Link to='/explore-prod'>
                    <button className='bg-red-500 text-white px-6 py-2 text-center'>Explore More Products</button>
                </Link>
                
            </div>
        </div>
    );
};

export default OrderSuccess;