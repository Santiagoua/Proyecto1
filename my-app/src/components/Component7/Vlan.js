import React from 'react';
import Menu from '../Component1/Menu'

function Vlan(_props) {
    return(
        <>
        <Menu/>
        <div className="actions">
        <button className="buton btn-blue">+ Agregar vlan</button>
    </div>
    </>
        );
    }

    export default Vlan;