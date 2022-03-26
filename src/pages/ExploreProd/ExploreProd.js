import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { CircularProgress } from '@mui/material';
import Products from '../Homepage/Products/Products';

const ExploreProd = () => {
    const [products, setProducts] = useState([])
    const { isLoading } = useAuth()
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    const size = 10;

    useEffect(() => {
        fetch(`https://fierce-earth-16415.herokuapp.com/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.result)
                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [page])
    return (
        <>
            {
                isLoading ? <CircularProgress></CircularProgress> :
                    <div>
                        < div className='bg-gray-700 bg-opacity-95 bg-blend-overlay flex items-center justify-center' style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/mock-up-wall-children-s-room-with-chair-light-pink-color-wall-background-3d-rendering_41470-3754.jpg?size=626&ext=jpg)', width: '100%', height: '500px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }
                        }>
                            <h2 className='md:text-6xl text-5xl px-5 text-center py-10  text-white font-semibold'>Explore Our Product Collections</h2>
                        </div >
                        <div className="md:container md:mx-auto px-5 lg:px-0 py-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {
                                    products.slice(0,10).map(product => <Products key={product._id} product={product}></Products>)
                                }
                            </div>
                            <div className="pagination">
                                {
                                    [...Array(pageCount).keys()].map(number => <button key={number} onClick={() => setPage(number)} className={number === page ? 'bg-red-500 border-2 border-red-500 text-white text-2xl px-2 mr-2 mt-16 rounded font-semibold' : 'border-2 px-2 mr-2 mt-16 border-red-500 text-xl rounded font-semibold'}>{number + 1}</button>)
                                }
                            </div>
                        </div>
                    </div >
            }
        </>
    );

};

export default ExploreProd;