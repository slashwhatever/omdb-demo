import React from 'react';
import PropTypes from 'prop-types';
import { ExclamationIcon } from '@heroicons/react/solid';

const Error = ({ error }) => {
  return error ? 
  <div className="m-10 p-10 rounded-lg shadow-xl border bg-gray-100 flex flex-col items-center">
    <ExclamationIcon className="h-8 w-8 text-red-700"/>
    <h1 className="text-2xl font-bold text-red-700 uppercase overflow-hidden text-center">{error}</h1>
  </div>
  : null;
}

Error.propTypes = {
  error: PropTypes.string,
}

Error.defaultProps = {
  error: undefined,
}

export default Error;