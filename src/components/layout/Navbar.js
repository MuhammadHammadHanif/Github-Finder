import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <NavLink
            to='/'
            exact
            activeStyle={{
              fontWeight: 'bold',
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            exact
            activeStyle={{
              fontWeight: 'bold',
            }}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
