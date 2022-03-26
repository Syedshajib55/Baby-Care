import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        fetch('https://fierce-earth-16415.herokuapp.com/all-orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    // handle status
    const handleStatus = (id) => {
        fetch(`https://fierce-earth-16415.herokuapp.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' }
        }).then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    window.location.reload(true)
                }
            })
    }
    const handleStatus1 = (id) => {
        fetch(`https://fierce-earth-16415.herokuapp.com/updateStatus1/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' }
        }).then(res => res.json())
            .then(data => {
                if (data.matchedCount) {
                    window.location.reload(true)
                }
            })
    }
    const handleStatus2 = (id) => {
        fetch(`https://fierce-earth-16415.herokuapp.com/updateStatus2/${id}`, {
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
        <div className='container mx-auto py-10'>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Product Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {allOrders.map((order) => (
                                        <tr key={order._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{order.name}</div>
                                                        <div className="text-sm text-gray-500">{order.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900 capitalize">{order.title}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button className='border-2 mr-2 border-red-500 rounded-full px-2' onClick={() => handleStatus(order._id)}>Approved</button>
                                                <button className='border-2 mr-2 border-red-500 rounded-full px-2' onClick={() => handleStatus1(order._id)}>On The Way</button>
                                                <button className='border-2 mr-2 border-red-500 rounded-full px-2' onClick={() => handleStatus2(order._id)}>Received</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;