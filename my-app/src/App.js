import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';
import Vlan from './Vlan';
import Interface from './Interface';
import Rutas from './Rutas';
import Footer from './Footer';

function App() {
 
  return (
    <div className='app'>
      <Menu title="CORPORACIONES.CORP"/>
      <Vlan/>
      <Interface/>
      <Rutas/>
      <List/>
      <Footer/>
    </div>
  );
}

export default App;