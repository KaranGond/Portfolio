import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className='title'>Home</Link>
      <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/GitHub">GitHub</NavLink>
        </li>
        <li>
          <NavLink to="/LinkedIn">LinkedIn</NavLink>
        </li>
        <li>
          <NavLink to="/Resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/Projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
