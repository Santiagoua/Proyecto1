import React from 'react';

const WeatherButton = ({ onClick }) => {
  return (
    <button className="weather-button" onClick={onClick}>
      Obtener clima
    </button>
  );
};

export default WeatherButton;
