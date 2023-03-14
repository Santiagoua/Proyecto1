import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Mi Página Web</h1>
      <p>Bienvenido a mi página web.</p>
      <Login />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
