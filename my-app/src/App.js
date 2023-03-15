import React from 'react';
import './App.css';
import Login from './Components/Component5/Login';
import ApiClima from './ApiClima'


function App() {
 
  return (
    <>

  <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
    <div className='app'>
      <Login/>
      <ApiClima/>
           
    </div>
    </>
  );
}

export default App;