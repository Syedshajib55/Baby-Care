import React from 'react';
import { Link } from 'react-router-dom';
import notFound from './notFound.png';
const NotFound = () => {
    return (
        <div>
            <img className='p-2 m-2 me-3' src={notFound} alt="" /><br />
            <Link to='/'><button className='btn btn-primary'>Go Back</button></Link>
        </div>
    );
};

export default NotFound;