import React from 'react'
import HeaderImg from '../../images/header.jpg'
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
      <img src={HeaderImg} alt='header-img' />
      <div className="header-link">
        <h1>Shop</h1>
        <Nav className="nav">
                <NavLink className='nav-link' to="/">Home</NavLink>
                <p> /</p>
                <NavLink className='nav-link'  to="/shop">Shop</NavLink>
              </Nav>
      </div>
    </div>
  )
}

export default Header
