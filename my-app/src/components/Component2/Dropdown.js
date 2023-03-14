import React, { useState } from 'react';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Agregar Vlan ','agregar Ruta', 'agregar Equipo'];

  return (
    <div>
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">Que dese realizar</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;