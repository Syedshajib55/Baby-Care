import React from 'react';
import { Link } from 'react-router-dom';

const LimitedOffer = () => {
    return (
        <div>
            <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="single-offer-box rounded-md flex items-center bg-opacity-75 bg-blend-overlay bg-black" style={{ backgroundImage: 'url(https://image.freepik.com/free-photo/red-luxury-sedan-road_114579-5079.jpg)', width: '100%', height: '300px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <div className='px-10'>
                            <h3 className='text-white text-6xl font-medium mb-2'>Limited Offer</h3>
                            <p className=' py-2 font-semibold text-white'>Modern Car House</p>
                            <p className='text-white'>This offer will be expire within next week. Be hurry to buy new car during this offer.</p>
                            <Link to='/explore-cars'>
                                <button className='bg-red-500 rounded-full focus:ring-2 ring-offset-2 duration-300 ring-red-500 mr-3 text-white md:font-medium px-8 py-2 mt-5 border-2 border-transparent hover:border-red-500 hover:bg-white hover:text-red-500'>Learn More</button>
                            </Link>
                        </div>
                    </div>
                    <div className="single-offer-box rounded-md flex items-center bg-opacity-75 bg-blend-overlay bg-black" style={{ backgroundImage: 'url(https://image.freepik.com/free-photo/stylish-black-woman-car-salon_1157-21421.jpg)', width: '100%', height: '300px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                        <div className='px-10'>
                            <h3 className='text-white text-6xl font-medium mb-2'>Smart Interior</h3>
                            <p className=' py-2 font-semibold text-white'>Sports Cars Available</p>
                            <p className='text-white'>This offer will be expire within next week. Be hurry to buy new car during this offer.</p>
                            <Link to='/explore-cars'>
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