import React from 'react';

const ButtonC = ({ onClick }) => {
  return (
    <button className="weather-button" onClick={onClick}>
      Obtener clima
    </button>
  );
};

export default ButtonC;
