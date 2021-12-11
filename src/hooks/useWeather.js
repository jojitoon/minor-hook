import { useCallback, useState } from 'react';
import axios from 'axios';
import { useInterVal } from '.';

export const useWeather = (city) => {
  const url = 'https://api.m3o.com/v1/weather/Now'; // weather api url
  const [weather, setWeather] = useState({}); // weather state

  const fetchWeather = useCallback(async () => {
    // fetch weather
    const { data } = await axios.post(
      // fetch weather data
      url,
      {
        location: city, // city name
      },
      {
        headers: {
          Authorization: `Bearer ZTYxNzc0YTMtMzAyNS00OWYyLWI0Y2QtNmIwOTlmMTVkYWZl`, // api key
        },
      }
    );
    setWeather(data); // set weather state
  }, [city]);

  useInterVal(fetchWeather, 10, true); // fetch weather every 10 seconds

  return { weather, fetchWeather };
};
