import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  IoIosArrowBack,
  IoIosSettings,
} from 'react-icons/io';

const Navigation = () => (
  <nav className="nav-container">
    <div className="navbar-container">
      <NavLink to="/">
        <IoIosArrowBack />
      </NavLink>
      <span>Countries Iofo 2023</span>
      <NavLink to="/country">
        <IoIosSettings />
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
