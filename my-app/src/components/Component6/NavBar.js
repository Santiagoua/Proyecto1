import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Vlan from '../../Vlan'
import Menu from '../Component1/Menu'
function NavBar() {
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}
const vlan= ()=>ReactDOM.render(<Vlan />, document.getElementById('root'));
const home= ()=>ReactDOM.render(<Menu />, document.getElementById('root'));
  return (
    <Navbar bg="light" expand="lg">
       <Navbar.Brand href="#home">CORP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={home}>Menu</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={vlan} >VLAN</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action s
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" onClick={handleClick}>Salir</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>

    </Navbar>
  );
}

export default NavBar;
