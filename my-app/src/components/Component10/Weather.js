import React, { useState } from 'react';
import WeatherButton from './WeatherButton';
import { getWeatherData } from './getWeather';
import './Clima.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const handleButtonClick = async () => {
    const data = await getWeatherData(city);
    setWeatherData(data);
  };

  return (
    <div className="weather-container">
      <WeatherButton onClick={handleButtonClick} />
      {weatherData && (
        <div className="weather-data">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperatura Actual: {weatherData.main.temp}°C</p>
          <p>Sensacion Termica: {weatherData.main.feels_like}°C</p>
        </div>
      )}
      <input type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
    </div>
  );
};

export default Weather;
