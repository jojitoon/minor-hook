import { useCallback, useState } from 'react';
import { useInterVal } from '.';

const calculateTimeDifference = (timeValue) => {
  const now = new Date();
  const timeDifference = now.getTime() - new Date(timeValue).getTime();
  const timeDifferenceInSeconds = timeDifference / 1000;
  const timeDifferenceInMinutes = timeDifferenceInSeconds / 60;
  const timeDifferenceInHours = timeDifferenceInMinutes / 60;
  const timeDifferenceInDays = timeDifferenceInHours / 24;
  const timeDifferenceInWeeks = timeDifferenceInDays / 7;
  const timeDifferenceInMonths = timeDifferenceInWeeks / 4;
  const timeDifferenceInYears = timeDifferenceInMonths / 12;

  if (timeDifferenceInSeconds < 60) {
    if (timeDifferenceInSeconds < 30) {
      return 'just now';
    }
    return `${Math.floor(timeDifferenceInSeconds)} seconds ago`;
  } else if (timeDifferenceInMinutes < 60) {
    return `${Math.floor(timeDifferenceInMinutes)} minutes ago`;
  } else if (timeDifferenceInHours < 24) {
    return `${Math.floor(timeDifferenceInHours)} hours ago`;
  } else if (timeDifferenceInDays < 7) {
    return `${Math.floor(timeDifferenceInDays)} days ago`;
  } else if (timeDifferenceInWeeks < 4) {
    return `${Math.floor(timeDifferenceInWeeks)} weeks ago`;
  } else if (timeDifferenceInMonths < 12) {
    return `${Math.floor(timeDifferenceInMonths)} months ago`;
  } else {
    return `${Math.floor(timeDifferenceInYears)} years ago`;
  }
};

export const useTimeValue = (value) => {
  const [time, setTime] = useState(calculateTimeDifference(value));

  const setTimeValue = useCallback(() => {
    setTime(calculateTimeDifference(value));
  }, [value]);

  useInterVal(setTimeValue, 1);

  return time;
};
