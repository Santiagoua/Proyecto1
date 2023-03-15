import React, { useState } from 'react';
import axios from 'axios';
import WeatherButton from './WeatherButton';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_APP_ID');
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="weather-app">
      {weatherData && (
        <div>
          <p>{weatherData.name}</p>
          <p>{weatherData.weather[0].description}</p>
        </div>
      )}
      <WeatherButton onClick={fetchWeatherData} />
    </div>
  );
};

export default WeatherApp;
