import React from 'react';
import { NavLink } from 'react-router-dom';

import './_nav.scss'; // Navbar bileşeni için özel SCSS dosyası

const Navbar = () => {
  return (
<nav className="nav">
      <ul className="nav__list"> {/* Nav linklerini bir liste olarak gruplayın */}
        <li className="nav__item">
          <NavLink to="/" className="nav__link home-nav">Home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" className="nav__link about-nav">About</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/projects" className="nav__link projects-nav">Projects</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/contact" className="nav__link contact-nav">Contact</NavLink>
        </li>
      </ul>
      </nav>

  );
}

export default Navbar;
