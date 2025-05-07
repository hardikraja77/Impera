import React from 'react';
import '../styles/Navbar.css';
import Logo from '/images/logo.png';

function Navbar() {
  const click = ()=>{
    const about = document.getElementById("about");
    if(about)
      about.scrollIntoView({behavior:'smooth'});
  }
  return (
    <nav className="navbar">
      <div className="navbar-section left logo">
        <img src={Logo} alt="Impera" />
      </div>
      <div className="navbar-section center">
        <ul className="nav-links">
          <li><a href=""><img src="/images/Subtract.png"></img></a></li>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About" onClick={click}>About</a></li>
          <li><a href="#Service">Service</a></li>
          <li><a href="#ContactUs">ContactUs</a></li>
        </ul>
      </div>
      <div className="navbar-section right">
        <button
          className="demo"
          onClick={() => window.open('https://forms.gle/JxC2VHCFK57pFG738', '_blank')}
        >
          Book a Demo
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
