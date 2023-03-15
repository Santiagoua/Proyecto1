import React from 'react';


const WeatherButton = ({ onClick }) => {
  return (
    <div className="button-container">
      <button className="weather-button" onClick={onClick}>
        Obtener Clima
      </button>
    </div>
  );
};

export default WeatherButton;
