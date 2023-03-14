import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Vlan from '../Component7/Vlan'
import Menu from '../Component1/Menu'
import Rutas from '../Component8/Rutas'
import Interface from '../Component9/Interface';
function NavBar() {
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}
const vlan= ()=>ReactDOM.render(<Vlan />, document.getElementById('root'));
const rutas= ()=>ReactDOM.render(<Rutas />, document.getElementById('root'));
const interfaz= ()=>ReactDOM.render(<Interface />, document.getElementById('root'));
const home= ()=>ReactDOM.render(<Menu />, document.getElementById('root'));
  return (
    <Navbar bg="light" expand="lg">
       <Navbar.Brand href="#home">CORP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={home} >Menu</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Accion" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={vlan} >VLAN</NavDropdown.Item>
              <NavDropdown.Item onClick={rutas} >Rutas</NavDropdown.Item>
              <NavDropdown.Item onClick={interfaz} >Interface</NavDropdown.Item>
            
            </NavDropdown>
            <Nav.Link href="#link" onClick={handleClick}>Salir</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
}

export default NavBar;
