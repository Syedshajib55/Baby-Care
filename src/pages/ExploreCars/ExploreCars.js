import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Products from '../Homepage/Products/Products';

const ExploreCars = () => {
    const [products, setProducts] = useState([])
    const { isLoading } = useAuth()

    useEffect(() => {
        fetch('https://salty-beyond-08378.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            {
                isLoading ? <h2 className='text-4xl text-red-500 text-center font-medium pt-30'>Loading...</h2> :
                    <div>
                        < div className='bg-gray-700 bg-opacity-95 bg-blend-overlay flex items-center justify-center' style={{ backgroundImage: 'url(https://image.freepik.com/free-photo/car-travelling-by-sunny-road_1088-51.jpg)', width: '100%', height: '250px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }
                        }>
                            <h2 className='md:text-6xl text-5xl px-5 text-center py-10  text-white font-semibold'>Explore Our Car Collections</h2>
                        </div >
                        <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {
                                    products.map(product => <Products key={product._id} product={product}></Products>)
                                }
                            </div>
                        </div>
                    </div >
            }
        </>
    );

};

export default ExploreCars;