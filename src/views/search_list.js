import React from "react";
import { useState } from 'react';
import Loader from '../components/loader';

function SearchList() {
    const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);

    // Simulating an asynchronous search request
    setTimeout(() => {
      setLoading(false);
      // Perform your search logic here
    }, 2000);
  };
  
  return (
    <>
    <div className='container'>
      {/* <h1 className='title'>Find npm</h1>
      <p className='sub-title'>Find every details about a npm package and get comprehensive details about it</p> */}
      <div className='search-container'>
        <input type="text" placeholder="Search in Search Page"  className='search-input'/>
        <button onClick={handleSearch} className='search-button'>
        {loading ? <Loader /> : 'Search'}
        </button>
      </div>
    </div>
    </>
  );
}

export default SearchList;