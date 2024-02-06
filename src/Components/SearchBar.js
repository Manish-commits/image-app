import React, { useState } from 'react'
import './SearchBar.css';

const SearchBar = ({onSubmit}) => {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  }

  function handleChange(event) {
    setTerm(event.target.value);
  }

  return (
    <div className='search-bar'>
    <form onSubmit={handleFormSubmit}>
      <label>Enter Search item </label>
      <input type='text' onChange={handleChange} value={term}/>
    </form>
    </div>
  )
}

export default SearchBar