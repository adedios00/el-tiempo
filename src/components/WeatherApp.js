import React, { useEffect, useState } from 'react';

import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import styles from './weatherApp.module.css';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`;
  }, [weather]);

  const url = 'http://api.weatherapi.com/v1/current.json?aqi=no';
  const key = '31317d83eeec461689f112345221605';

  async function loadInfo(city = 'Jaén') {
    try {
      const request = await fetch(`${url}&key=${key}&q=${city}`);

      const json = await request.json();
      setWeather(json);
    } catch (error) {}
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather} />
    </div>
  );
};

export default WeatherApp;
