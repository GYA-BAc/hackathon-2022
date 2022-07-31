import React from 'react';
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
        <Bars />
  
        <NavMenu>
          <NavLink to='/'>
            <h1>Home</h1>
          </NavLink>
          <NavLink to='/about' activestyle>
            <h1>About</h1>
          </NavLink>
          <NavLink to='/links' activestyle>
            <h1>Links</h1>
          </NavLink>
          <a href="https://looseends84.godaddysites.com/" target="_blank"><h1>Store</h1></a>
          <NavLink to='/signup' activestyle>
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