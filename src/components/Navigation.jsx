import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  IoIosArrowBack,
  IoIosSettings,
} from 'react-icons/io';
import './Styles/Navigation.css';

const Navigation = () => (
  <nav className="nav main-color">
    <div className="navbar">
      <NavLink to="/">
        <IoIosArrowBack className="txtwhite" />
      </NavLink>
      <h1 className="txtwhite">Countries Info 2023</h1>
      <NavLink to="/country">
        <IoIosSettings className="txtwhite" />
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
