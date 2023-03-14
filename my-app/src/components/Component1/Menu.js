import React from 'react';
import Search from '../../Search';
import Dropdown from '../Component2/Dropdown';
import './App.css';


function Menu(_props) {
    return(
        <div className="container">
            <div className="subcontainer">
                <div className="Logo">
                    {_props.title}
                    
                </div>
                <div className="search">
                    <Search />
                </div>
                <div className='Dropdown'>
                    <Dropdown/>
                </div>

            </div>

        </div>
          
        )
    }

    export default Menu;