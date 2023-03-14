import React from 'react';
import Dropdown from '../Component2/Dropdown';
import NavBar from '..Component6/NavBar';
import './Menu.css';

function Menu(_props) {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
    return(
        <div className="container">
            <div className="subcontainer">
                <div className="Logo">
                    {_props.title}                    
                </div>
                <div className='Dropdown'>
                    <Dropdown/>
                </div>
                <div className='NavBar'>
                    <NavBar />
                </div>
                <button onClick={handleClick}>Logout</button>
        
            </div>

        </div>
          
        )
    }

    export default Menu;