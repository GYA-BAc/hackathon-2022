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
        Links
      </a>
      <a className="option" href="/store">
        Store
      </a>
      <a className="option" href="/signup">
        Sign Up
      </a>
      <a className="option" href="/signin">
        Sign In
      </a>
    </Menu>
  );
};