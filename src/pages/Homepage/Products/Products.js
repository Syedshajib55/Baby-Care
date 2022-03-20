import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = ({ product }) => {
    const { name, price, cc, type, year, img, _id } = product;
    return (
        <div className="single-best-selling-car-box shadow duration-300 transition-all hover:shadow-xl overflow-hidden rounded mb-5">
            <div className='overflow-hidden'>
                <img className='transform hover:scale-110 transition-all duration-300 w-full' src={img} style={{ height: '280px' }} alt="" />
            </div>
            <div className="car-info-box p-5 text-center">
                <Link to={`/car-details/${_id}`}>
                    <h2 className='text-2xl mb-3 font-semibold capitalize'>{name}</h2>
                </Link>
                {/* <div className='flex justify-evenly'> */}
                    <p className='text-lg font-semibold text-red-500 mb-3'><i className="fas "></i>{price} $</p>
                    {/* <h4 className='text-lg font-semibold text-red-500 mb-3'><i className="fas fa-cogs"></i> {cc}cc</h4> */}
                {/* </div> */}
                <Link to={`/car-details/${_id}`}>
                    <button className='bg-red-500 rounded-full focus:ring-2 ring-offset-2 duration-300 ring-red-500 mb-5 text-white font-medium px-6 py-1 mt-2 border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500 mr-1'><i className="fas fa-cart-plus"></i> Add To Cart</button>
                </Link>
                <Link to={`/car-details/${_id}`}>
                    <button className='bg-red-500 rounded-full focus:ring-2 ring-offset-2 duration-300 ring-red-500 mb-5 text-white font-medium px-6 py-1 mt-2 border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500 mr-1'><i className="fas fa-info-circle"></i> Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Products;