import React, { useState } from 'react';

import styles from './weatherForm.module.css';

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState(null);

  function onChange(e) {
    const value = e.target.value;
    if (value !== '') {
      setCity(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type='text'
        placeholder='Introduce una ciudad y presiona enter'
        onChange={onChange}
        className={styles.input}
      />
    </form>
  );
};

export default WeatherForm;
