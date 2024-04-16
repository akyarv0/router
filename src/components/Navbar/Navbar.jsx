import React from 'react';
import { NavLink } from 'react-router-dom';
import './_nav.scss'




function Navbar() {
  return (
    <div>
    <ul class="nav__list">
    <li class="nav__item">
        <a href="index.html" class="nav__link nav__link--active">Home</a>
    </li>
    <li class="nav__item">
        <a href="about.html" class="nav__link">About Me</a>
    </li>
    <li class="nav__item">
        <a href="projects.html" class="nav__link">My Project</a>
    </li>
    <li class="nav__item">
        <a href="contact.html" class="nav__link">Contact</a>
    </li>
</ul>
    </div>
  );
}

export default Navbar;
