import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './index.css';

export default SideBar => {
  return (
    <Menu>
      <a className="option" href="/">
        Home
      </a>
      <a className="option" href="/about">
        About
      </a>
      <a className="option" href="/links">
        Services
      </a>
      <a className="option" href="/store">
        Store
      </a>
      <a className="option" href="/signup">
        Join Us
      </a>
      <a className="option" href="/signin">
        Sign In
      </a>
    </Menu>
  );
};