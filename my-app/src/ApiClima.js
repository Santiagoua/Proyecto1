import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '3c8156ef885aebd3cfae780f4bf9283b';
  const CITY = 'MEDELLIN';
  const UNITS = 'imperial'; // Cambiar a 'metric' para Celsius
  
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&appid=${API_KEY}`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="weather-container">
      {weatherData ? (
        <div className="weather-data">
          <h1>{weatherData.name}</h1>
          <p>{weatherData.weather[0].description}</p>
          <p>{weatherData.main.temp} {UNITS === 'imperial' ? '°F' : '°C'}</p>
        </div>
      ) : (
        <p>Cargando datos del clima...</p>
      )}
    </div>
  );
}

export default Weather;