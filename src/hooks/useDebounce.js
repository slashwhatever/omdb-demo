import { useState, useEffect } from 'react'
/**
 * 
 * @param {*} value any value passed in you want to debounce
 * @param {number} delay delay timeout. defaults to 500ms
 */
function useDebounce(value, delay = 500) {
  // Local state stores the value passed in 
  const [dbValue, setDbValue] = useState(value);

  useEffect(
    () => {
      // Set a timeout to update the local state after the delay period
      const timer = setTimeout(() => {
        setDbValue(value);
      }, delay);

      // Clear the timeoutIf the value changes in the timeout period, update the value and clear the timeout
      return () => {
        clearTimeout(timer);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return dbValue;
}

export default useDebounce;