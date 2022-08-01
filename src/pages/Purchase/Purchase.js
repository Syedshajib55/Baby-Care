import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Purchase.css'
import { ProductionQuantityLimits } from '@mui/icons-material';


const Purchase = () => {
    const [product, setProduct] = useState({})
    const { user } = useAuth()
    const[ count, setCount] = useState(1);
    const { id } = useParams();
    const history = useHistory()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const increment = () =>{
        setCount(count+1);
    }
    const decrement = () =>{
        count > 1 ? setCount(count-1) : alert('Quantity Can not be Zero');
    }
    

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    // buy now
    const onSubmit = data => {
        data.title = product.name
        data.price = product.price
        data.Quantity = count;
        data.email = user.email;
        data.status = 'pending'
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                     history.push(`/dashboard`)
                    //  history.push(`/payment-method/${data.insertedId}`)
                    reset()
                }
            })
    }
    return (
        <div>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="car-details m-5">
                        <img src={product.img} alt="" />
                        <h3 className='text-4xl capitalize font-semibold my-5'>{product.name}</h3>
                        <p className='font-semibold text-xl'>Price <span className='text-red-500'>${product.price}</span></p>
                        <p className='text-lg mt-5'>{product.body}</p>
                    </div>
                    <div className="puchase-info-form mt-20">
                            
                            <p className='resume-btn text-align-centre'>Quantity : {count}</p>

                            <button className='resume-btnn mx-10' onClick={increment}>+</button>
                            <button className='resume-btnn mx-10' onClick={decrement}>-</button>  
                        
                            <form onSubmit={handleSubmit(onSubmit)}>

                            {/* <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' defaultValue={user.email} {...register("email", { required: true })} placeholder='Email' /> <br /> */}
                           

                            {/* <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none'  */}
                            {/* // defaultValue={0}  */}
                            {/* value={count} */}
                             {/* {...register("Quantity")} type='number' placeholder='Quantity' /> <br /> */}
                            
                            
                            {/* errors will return when field validation fails  */}
                            {errors.name || errors.email || errors.address || errors.city || errors.phone ? <span className='text-red-500 font-semibold  pl-5 mb-3'>Please fill all the input correctly!</span> : ""}
                            {/* Add to cart */}
                            <input className='resume-btn ml-12' type="submit" value='Add To Cart' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;