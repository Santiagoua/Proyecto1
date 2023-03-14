import React from 'react';
import Menu from '../Component1/Menu'
import './Vlan';
import Button from './Button';

function Vlan(_props) {
    return(
        <>
        <Menu/>
        <div>
      <Button text="Agregar VLAN" />
    </div>
    </>
        );
    }

    export default Vlan;