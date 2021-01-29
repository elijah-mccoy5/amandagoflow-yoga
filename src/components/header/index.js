import React from 'react';
import {Navbar , Nav ,NavDropdown, } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
    return (
        <Navbar className="header" bg="clear" expand="lg">
  <Navbar.Brand >
  <Link to="/" className="header-logo">
        Amandagoflow
        </Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">

      <Nav.Link>
        <Link to="/" className="nav-links">
        Home
        </Link>
        </Nav.Link>    
        <Nav.Link>
      <Link to="/about" className="nav-links">
        About
        </Link>
      </Nav.Link>
      <Nav.Link>
      <Link to="/classes" className="nav-links">
       Yoga
        </Link>
      </Nav.Link>
    <Nav.Link>
      <Link to="/fitness" className="nav-links">
        Fitness
        </Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Header;