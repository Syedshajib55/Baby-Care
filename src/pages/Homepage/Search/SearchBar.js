import React from 'react';
import {Autocomplete} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css'
const SearchBar = ({data,placeholder}) => {
    return (
        <div className='search '>
            <div className='searchInput '>
                <Autocomplete
                id='custom-input-demo'
                options={data}
                getOptionLabel={(opt)=>opt.name}
                renderInput={
                    (params)=>(
                        <div ref={params.InputProps.ref}>
                            <input type="text" 
                            {...params.inputProps} 
                            placeholder={placeholder}
                            autofocus='true'/>
                        </div>
                    )
                }
                >
                </Autocomplete>
                <div>
                    <SearchIcon className='searchIcon'></SearchIcon>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;