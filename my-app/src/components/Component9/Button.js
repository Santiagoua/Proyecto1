import React, { useState } from 'react';
import './Interface.css';

function TextInput() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddItem = () => {
    setItems([...items, inputText]);
    setInputText('');
  };

  return (
    <div className="textInputContainer">
      <input type="text" placeholder="Escribe aquí" value={inputText} onChange={handleInputChange} className="textInput" />
      <button onClick={handleAddItem} className="addButton">Agregar</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TextInput;
