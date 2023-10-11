import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  IoIosArrowBack,
  IoIosSettings,
} from 'react-icons/io';
import './Styles/Navigation.css';

const Navigation = () => (
  <nav className="nav main-color" data-testid="nav-test">
    <div className="navbar">
      <NavLink to="/">
        <IoIosArrowBack className="icon txtwhite" />
      </NavLink>
      <h1 className="txtwhite">Countries Info 2023</h1>
      <NavLink to="/country">
        <IoIosSettings className="icon txtwhite" />
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
