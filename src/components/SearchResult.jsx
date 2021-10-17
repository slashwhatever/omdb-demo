import React from 'react';
import PropTypes from 'prop-types'

// seach result will show the poster image, movie title and release year
const SearchResult = ({ title, year, thumbnail }) => {
  return (
    <div className="rounded-xl shadow-xl border  bg-gray-100 flex flex-col justify-items-end">
      <div className="h-96 bg-cover rounded-t-xl bg-no-repeat bg-center bg-clip-content" style={{backgroundImage: `url(${thumbnail})`}}></div>
      <div className="p-5 flex-1 w-full rounded-b-xl bg-white overflow-hidden overflow-ellipsis text-left">
        <h1 className="text-xl font-bold text-gray-900 uppercase">{title}</h1>         
        <p className="text-m text-gray-700">Released: {year}</p>
      </div>
    </div>
  )
}

SearchResult.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string,
  thumbnail: PropTypes.string,
}

SearchResult.defaultProps = {
  title: '',
  year: '',
  thumbnail: ''
}

export default SearchResult;