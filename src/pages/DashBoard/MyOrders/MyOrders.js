import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [products, setProducts] = useState([])
    const [isDelete, setIsDelete] = useState(null)
    const { user } = useAuth()
    const { id } = useParams();
    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    let total = products.reduce((total, item) => Number(item.price * item.Quantity) + total, 0)

    // buy now
    const onSubmit = data => {
        //data.title = products.name
        //data.price = 0
        data.price = total;
        data.status = 'pending'
        fetch('http://localhost:5000/userAddress', {
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
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email])
    // delete order
    const handleDeleteOrder = (id) => {
        const confirmation = window.confirm('Are you sure you want to cancel your order?')
        if (confirmation) {
            fetch(`http://localhost:5000/delete-order/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setIsDelete(true)
                        alert('Deleted Successfully.')
                        window.location.reload()
                    } else {
                        setIsDelete(false)
                    }
                })
        }
    }
    return (
        <div className="container mx-auto py-10">
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xl font-medium text-red-700 uppercase tracking-wider"
                                        >
                                            Product Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xl font-medium text-red-700 uppercase tracking-wider"
                                        >
                                            Order Id
                                        </th>
                                        {/* <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xl font-medium text-red-700 uppercase tracking-wider"
                                        >
                                            Address
                                        </th> */}
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xl font-medium text-red-700 uppercase tracking-wider"
                                        >
                                            Price (TK)
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xl font-medium text-red-700 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xl font-medium text-red-700 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {products.map((product) => (
                                        <tr key={product._id}>
                                            <td className=" py-4 whitespace-nowrap">
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900 capitalize">{product.title}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{product._id}</div>
                                            </td>
                                            {/* <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{product.address}</div>
                                            </td> */}
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{ product.Quantity ? product.price * product.Quantity : product.price}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xss leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {product.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button onClick={() => handleDeleteOrder(product._id)} className='hover:text-red-400 font-semibold text-center'>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-4xl text-bold text-red-700 p-5 text-center">Total Price : {total} TK</p>
                <div className="puchase-info-form">
                        <h2 className='text-4xl capitalize font-semibold mb-10 text-green-500 text-center mt-10 lg:mt-0'>Fill up the form to Checkout</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("name", { required: true })} placeholder='Your Name' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' defaultValue={user.email} {...register("email", { required: true })} placeholder='Email' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("address", { required: true })} placeholder='Your Address' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("city", { required: true })} placeholder='City' /> <br />
                            <input className='border-b-2 w-full border-red-400 pl-5 mb-5 rounded-full py-3 outline-none' {...register("phone", { required: true })} type='number' placeholder='Your Phone Number' /> <br />
                            {/* errors will return when field validation fails  */}
                            {errors.name || errors.email || errors.address || errors.city || errors.phone ? <span className='text-red-500 font-semibold  pl-5 mb-3'>Please fill all the input correctly!</span> : ""}
                            
                            <input className='text-4xl resume-btn text-bold p-5 text-center' type="submit" value='Proceed to Checkout' />
                        </form>
                        <div>
                            <p className='text-black-500 mt-10 px-10'> {`/*`} Please use the demo card number <span className='font-bold'>4242 4242 4242 4242</span> then you can use any future date and in cvc type 5 digit {`*/`}</p>
                        </div>
                    </div>
        </div>
    );
};

export default MyOrders;