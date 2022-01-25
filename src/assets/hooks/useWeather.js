import { useState, useEffect } from 'react';

const cache = {};

const api = {
  key: 'a746ba54cd02b775a998fe8a51f4fb23',
  base: 'https://api.openweathermap.org/data/2.5/'
}

export default function useWeather(city) {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState("unloaded");

  useEffect(() => {
    if (!city) {
      setWeather({});
    } else if (cache[city]) {
      setWeather(cache[city]);
    } else {
      fetchWeather();
    }

    async function fetchWeather() {
      setWeather({});
      setLoading("loading");
      const res = await fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`);
      const json = await res.json();
      cache[city] = json || {};
      setWeather(cache[city]);
      setLoading("loaded");
    }
  }, [city]);

  return [weather, loading];
}