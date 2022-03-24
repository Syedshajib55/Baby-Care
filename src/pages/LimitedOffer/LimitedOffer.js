import React from 'react';
import { Link } from 'react-router-dom';

const LimitedOffer = () => {
    return (
        <div>
            <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                <div 
                // className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                >
                    <div className="single-offer-box rounded-md flex items-center bg-opacity-75 bg-blend-overlay " style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/promotion-sale-labels-best-offers_206725-127.jpg?size=626&ext=jpg)', width: '100%', height: '600px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <div className='px-10'>
                            <h3 className='text-black text-6xl font-medium mb-2'>Limited Offer</h3>
                            <p className=' py-2 font-semibold text-black'>Modern Products</p>
                            <p className='text-black text-2xl'>This offer will be expire within next week. Be hurry to buy new products during this offer.</p>
                            <Link 
                            // to='/explore-cars'
                            >
                                <button className='bg-red-500 rounded-full focus:ring-2 ring-offset-2 duration-300 ring-red-500 mr-3 text-white md:font-medium px-8 py-2 mt-5 border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500'>Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LimitedOffer;