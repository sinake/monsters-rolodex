import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input className='search-box' placeholder={placeholder} type='search' onChange={handleChange} />
    )
}