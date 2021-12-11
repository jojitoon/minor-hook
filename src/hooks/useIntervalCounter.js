import { useCallback, useState } from 'react';
import { useInterVal } from '.';

/*
 * Hook to use setInterval with React
 * @param {number} seconds - Interval in milliseconds
 * @params {number} step - Step to be added to the counter
 * @returns {number} - Counter value
 */

export const useIntervalCounter = ({ seconds = 1, step = 1 }) => {
  // params are optional
  const [counter, setCounter] = useState(0); // counter starts at 0

  const changeCounter = useCallback(() => {
    setCounter((prev) => prev + (Number(step) || 1));
  }, [step]);

  useInterVal(changeCounter, seconds);
  return counter; // return counter
};
