import { useEffect } from 'react';

export const useInterVal = (cb, time = 1, callOnMount) => {
  useEffect(() => {
    const seconds = (Number(time) || 1) * 1000;
    callOnMount && cb();
    const interval = setInterval(cb, seconds);
    return () => clearInterval(interval);
  }, [cb, time, callOnMount]);
};
