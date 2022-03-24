import React from 'react';
import SearchBar from './SearchBar'
import Data from './Data.json'
const Search = () => {
    return (
        <div className='text-neutral-50'>
            <SearchBar data ={Data} placeholder="Search for products..."></SearchBar>
        </div>
    );
};

export default Search;