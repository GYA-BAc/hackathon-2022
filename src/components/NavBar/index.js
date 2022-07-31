import React, { useRef } from 'react';
import './index.css'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavBarElements';
  
const Navbar = () => {

  return (
    <>
      <Nav>
        
        <img src="/Loose1.png" alt="logo" id="logo"/>
  
        <NavMenu>
          <NavLink to='/'>
            <h1>Home</h1>
          </NavLink>
          <NavLink to='/about' activestyle='true'>
            <h1>About</h1>
          </NavLink>
          <NavLink to='/links' activestyle='true'>
            <h1>Links</h1>
          </NavLink>
          <a href="https://looseends84.godaddysites.com/" target="_blank" style={{
            color: 'inherit',
            textDecoration: 'inherit',
            padding: '0 2rem'
          }}><h1>Store</h1></a>
          <NavLink to='/signup' activestyle='true'>
            <h1>Sign Up</h1>
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'><b>Sign In</b></NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;