import { useState } from 'react';

/*
 * Hook to manage the counter
 * @param {number} initialValue - Initial value of the counter
 * @param {number} maxValue - Maximum value of the counter
 * @param {number} minValue - Minimum value of the counter
 *
 * @returns {object} - Object with the counter value and the function to increment/decrement the counter
 */

export const useCounter = (initialValue, minValue, maxValue) => {
  const [count, setCounter] = useState(Number(initialValue) || 0); // counter set to initial value

  const increment = (value = 1) => {
    // initial value is 1
    setCounter((prev) => {
      const newValue = prev + (Number(value) || 1); // new value is previous value - value
      return newValue <= maxValue ? newValue : maxValue; // setCounter to new value
    }); // setCounter to previous value + value
  };

  const decrement = (value = 1) => {
    // const newValue = count - (Number(value) || 1); // new value is previous value - value

    // if (newValue >= minValue) {
    //   setCounter(newValue); // setCounter to new value
    // }

    setCounter((prev) => {
      const newValue = prev - (Number(value) || 1); // new value is previous value - value
      return newValue >= minValue ? newValue : minValue; // setCounter to new value
    });
  };

  return { count, increment, decrement }; // return count, increment and decrement
};
