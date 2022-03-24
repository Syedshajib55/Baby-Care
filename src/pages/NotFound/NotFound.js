import React from 'react';
import { Link } from 'react-router-dom';
import notFound from './notfound.jpg';
const NotFound = () => {
    return (
        <div>
            <h1 className="text-5xl text-red-500 text-center">Page Not Found</h1>
            <img className='p-2 m-2 me-3' src={notFound} alt="" /><br />
            <Link to='/'><button className='btn btn-primary resume-btn'>Go Back</button></Link>
        </div>
    );
};

export default NotFound;