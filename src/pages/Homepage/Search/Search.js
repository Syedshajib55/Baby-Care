import React from 'react';
import { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Products from '../Products/Products'
import Searchh from './Searchh.css'
const Search = () => {
    const [products, setProducts] = useState([])
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                  setProducts(data.result);
                  setDisplayProducts(data.result);
                });
    }, [])
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
    return (
        <>
        <div className='mt-5'>
            <div className="search-container">
                <input className=''
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" /><SearchIcon className='icon'></SearchIcon>
            </div>
        </div>
        <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                    {
                        displayProducts.slice(0,6).map(product => <Products
                            key={product._id} product={product}
                        >
                        </Products>)
                    }
                </div>
        </div>
                
    </>
    );
};

export default Search;