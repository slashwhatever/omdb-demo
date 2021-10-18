import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListItem from './ListItem.jsx'

// List component will use some responsive grid classes to better render across various device sizes
const List = ({ items }) => {
  return (
    items.length ?
    <ol className="p-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {
        items.map((i, index) =>  {
          return <ListItem title={i.Title} year={i.Year} thumbnail={i.Poster} key={index}/>
        })
      }
    </ol> : null
  )
  
}

List.propTypes = {
  items: PropTypes.array
}

List.defaultProps = {
  items: []
}

export default List;
