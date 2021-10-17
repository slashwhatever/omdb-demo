import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import List from './List.jsx'
import SearchBar from './SearchBar.jsx';
import Error from './Error.jsx';

const App = ({ items, error, isLoading }) => {
  return (
    <div className="justify-center">
      <SearchBar isLoading={isLoading}/>
      <List items={items}/>
      <Error error={error}/>
    </div>
  )
};

export default connect(({ results }) => ({
  items: results.items,
  error: results.error,
  isLoading: results.isLoading
}), dispatch => ({}))(App);

App.propTypes = {
  items: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool
}

App.defaultProps = {
  items: [],
  error: undefined,
  isLoading: false
}