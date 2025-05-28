import React, { useState } from 'react';
import '../styles/Navbar.css';
import Logo from '/images/logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={Logo} alt="Company Logo" className="logo" />
      </div>

      <div className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#Home" onClick={() => handleNavigation('Home')}>Home</a></li>
          <li><a href="#About" onClick={() => handleNavigation('About')}>About</a></li>
          <li><a href="#Service" onClick={() => handleNavigation('Service')}>Service</a></li>
          <li><a href="#Contact" onClick={() => handleNavigation('Contact')}>Contact</a></li>
        </ul>
        
        <button 
          className="demo-button"
          onClick={() => window.open('https://forms.gle/JxC2VHCFK57pFG738', '_blank')}
        >
          Book a Demo
        </button>
      </div>

      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </nav>
  );
}

export default Navbar;