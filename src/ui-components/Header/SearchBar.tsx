import React from "react";
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <form className='d-flex align-items-center ms-auto ms-xs-0'>
      <input
        className='form-control me-2 me-xs-0'
        type='search'
        placeholder='Search'
        aria-label='Search'
      />
      <button className='btn btn-outline d-flex justify-content-center' type='submit'>
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
