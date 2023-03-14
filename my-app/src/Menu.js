import React from 'react';


function Menu(_props) {
    return(
        <div className="container">
            <div className="subcontainer">
                <div className="Logo">
                    {_props.title}
                    
                </div>
                <div className="Search">
                    <SearchBox />
                </div>
                <div className="actions">
                    <button className="buton btn-blue">+ Agregar vlan</button>
                </div>

            </div>

        </div>
          
        )
    }

    export default Menu;