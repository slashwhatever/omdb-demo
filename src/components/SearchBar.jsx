import React, { useState, useEffect, useRef } from 'react';
import useDebounce from '../hooks/useDebounce.js'
import { XCircleIcon } from '@heroicons/react/solid'
import { RefreshIcon } from '@heroicons/react/outline'

import store from '../store/index.js';

const { dispatch } = store;

// Search bar will take the user input, debounce it before calling the OMDb API.
// Also has a loading spinner and a clear button for better user experience
const SearchBar = ({ isLoading }) => {

  // we need a ref to set the focus on the input after clearing it's value
  const searchInputEl = useRef(null);

  // store some local state for the text search value
  const [searchText, setSearchText] = useState('');

  // useDebounce hook lets us wait for the user to stop typing before we fire off the api, reducing network noise
  const debouncedSearchText = useDebounce(searchText);

  useEffect(() => {
    // call the api here after the user stops typing and the debounce takes effect
    if ( debouncedSearchText ) dispatch.results.fetchResults({searchText: debouncedSearchText});
  }, [debouncedSearchText])

  // updates the local state searchText on user input
  const handleSearch = (e) => {
    // set the local state for searchText
    setSearchText(e.currentTarget.value);
  };

  // clear the input, clear local state and return focus to the input
  const handleClear = (e) => {
    dispatch.results.clearResults();
    setSearchText('');
    searchInputEl.current.focus();
  };
  
  return (
    <div className="mx-10 px-5 border rounded-lg shadow-xl bg-gray-100 flex items-center">
      <input ref={searchInputEl} className="bg-gray-100 w-full p-5 text-2xl font-bold text-gray-900 uppercase outline-none" value={searchText} autoFocus placeholder="Search by title..." onChange={handleSearch} aria-label="input search" role="search" type="text"/>
      { isLoading ? <RefreshIcon className="h-8 w-8 text-gray-900" /> : null }
      { searchText && !isLoading ? <XCircleIcon className="h-8 w-8 text-gray-900" onClick={handleClear}/> : null }
    </div>
  )
}

export default SearchBar;