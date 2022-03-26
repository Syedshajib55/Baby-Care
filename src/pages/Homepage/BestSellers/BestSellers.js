import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';

const BestSellers = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.result))
    }, [])
    return (
        <div>
            <div className="md:container md:mx-auto px-5 lg:px-0  py-10">
                <div className="section-title text-center mb-14">
                    <h2 className='text-5xl capitalize font-semibold'>Our best Selling Products</h2>
                    <span className='block w-28 mt-3 h-1 bg-red-500 mx-auto'></span>
                    <span className='block w-20 mt-1 h-1 bg-yellow-500 mx-auto'></span>
                    <h2 className='text-5xl bg-red-300 capitalize mt-5 font-semibold'>School</h2>
                    <span className='block w-28 mt-3 h-1 bg-red-500 mx-auto'></span>
                    <span className='block w-20 mt-1 h-1 bg-yellow-500 mx-auto'></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                    {
                        products.slice(0, 6).map(product => <Products key={product._id} product={product}></Products>)
                    }
                </div>
                <Link to='/explore-prod'>
                    <h3 className='text-center mt-5 md:mt-5'><button className='bg-red-500 rounded-full focus:ring-2 ring-offset-2 duration-300 ring-red-500 mr-3 text-white font-medium px-8 py-2 border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500 md:text-lg capitalize'>See More</button></h3>
                </Link>
            </div>
            <div className="md:container md:mx-auto px-5 lg:px-0  py-10">
                <div className="section-title text-center mb-14">
                    {/* <h2 className='text-5xl capitalize font-semibold'>Our best Selling Products</h2> */}
                    <h2 className='text-5xl bg-red-300 capitalize mt-5 font-semibold'>Toys</h2>
                    <span className='block w-28 mt-3 h-1 bg-red-500 mx-auto'></span>
                    <span className='block w-20 mt-1 h-1 bg-yellow-500 mx-auto'></span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                    {
                        products.slice(16,22).map(product => <Products key={product._id} product={product}></Products>)
                    }
                </div>
                <Link to='/toys'>
                    <h3 className='text-center mt-5 md:mt-5'><button className='bg-red-500 rounded-full focus:ring-2 ring-offset-2 duration-300 ring-red-500 mr-3 text-white font-medium px-8 py-2 border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500 md:text-lg capitalize'>See More</button></h3>
                </Link>
            </div>
        </div>
    );
};

export default BestSellers;