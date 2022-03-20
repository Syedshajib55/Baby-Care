import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='pt-10 bg-gray-800'>
            <div className="md:container md:mx-auto px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="footer-box">
                        <h2 className='text-red-400 font-semibold text-4xl capitalize'>Baby  <span className='text-yellow-400'>Care</span></h2>
                        <p className='text-white mt-5'>We sales new updated products of different brands. We ensure our customer satisfaction and customer is our main priority.</p>
                    </div>
                    <div className="footer-box">
                        <h2 className='text-white text-2xl bold mb-3'>Quick Links</h2>
                        <Link to='/' className='block text-white underline mb-2 hover:text-red-400'>Home</Link>
                        <Link to='/about' className='block text-white underline mb-2 hover:text-red-400'>About Us</Link>
                        <Link to='/contact' className='block text-white underline mb-2 hover:text-red-400'>Contact us</Link>
                        <Link to='' className='block text-white underline mb-2 hover:text-red-400'>Shipping and Delivery</Link>
                        <Link to='' className='block text-white underline mb-2 hover:text-red-400'>Privacy Policy</Link>
                    </div>
                    <div className="footer-box">
                        <h2 className='text-white text-2xl bold mb-3'>Company Information</h2>
                        <Link to='/return-refund' className='block text-white underline mb-2 hover:text-red-400'>Refund and Return Policy</Link>
                        <Link to='' className='block text-white underline mb-2 hover:text-red-400'>Terms and Conditions</Link>
                        <Link to='' className='block text-white underline mb-2 hover:text-red-400'>Cashback Terms & Conditions</Link>
                        
                    </div>
                    <div className="footer-box">
                        <h2 className='text-white text-2xl bold mb-3'>Contact Us</h2>
                        <div className="footer-contact">
                            <span className='flex text-white items-center mb-5'><FaMapMarkerAlt className='text-red-500 text-2xl' />
                                <p className='ml-3'> Gazipur, Dhaka, Bangladesh</p></span>
                            <span className='flex text-white items-center mb-5'><FaPhoneAlt className='text-red-500 text-2xl' />
                                <p className='ml-3'>+88019222555</p></span>
                            <span className='flex text-white items-center mb-5'><FaEnvelope className='text-red-500 text-2xl' />
                                <p className='ml-3'>Babycare@yahoo.com</p></span>
                            <span className='flex text-white items-center mb-5'><FaClock className='text-red-500 text-2xl' />
                                <p className='ml-3'>24/7 hours Open</p></span>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center text-white font-semibold text-xl py-5 mt-5 border-t-2 border-red-500'>All right reserved to <span className='text-2xl'>Baby Care</span> &copy; 2022</p>
        </div>
    );
};

export default Footer;