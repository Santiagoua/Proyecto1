import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '3c8156ef885aebd3cfae780f4bf9283b';
  const CITY = 'MEDELLIN';
  

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {weatherData ? (
        <div style={{ textAlign: 'center' }}>
          <h1>{weatherData.name}</h1>
          <p>{weatherData.weather[0].description}</p>
          <p>{weatherData.main.temp} °C</p>
        </div>
      ) : (
        <p>Cargando datos del clima...</p>
      )}
    </div>
  );
}

export default Weather;