import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const imageStyle = {
    borderRadius: '50%',
    width: '30px',  // Adjust the width as needed
    height: '30px', // Adjust the height as needed
    marginRight: '10px', // Optional: add margin for spacing between image and text
  };

  return (
    <nav>
      <Link to="/Home" className='title'><img src="/logo512.png" alt='Your Image' style={imageStyle} />Karan Gond</Link>
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
