import React from 'react';
import './Navi.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import{NavLink} from 'react-router-dom'
import {FaShoppingBasket} from 'react-icons/fa';
import Logo from '../../images/logo-1_8505ef07-bee3-4d82-aaf7-dc2fdb2b7793.png'
function Navi() {
    return (
        <Navbar bg="light" expand="lg">
          <Container className='container'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav">
                <NavLink className='nav-link' to="/">Home</NavLink>
                <NavLink className='nav-link'  to="/shop">Shop</NavLink>
              </Nav>
              <Navbar.Brand className='brand' to="/">
                <img src={Logo} alt='logo' />
              </Navbar.Brand>
          <Nav className='icon-nav'>
            <FaShoppingBasket/><Badge  bg="secondary" >0</Badge>
          </Nav>
            </Navbar.Collapse>
    
          </Container>
        </Navbar>
      );
}

export default Navi