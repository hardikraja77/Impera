import React from "react";
//import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="/images/impera.png" alt="Impera Logo" className="logo" />
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">About us</a>
        </div>
        </div>

        <div className="footer-icons">
          <a href="" target="_blank"><img src="/images/twitter.gif" alt="twitter-logo"></img></a>
          <a href="" target="_blank"><img src="/images/linkedin.png" alt="Linkedin-logo"></img></a>
          <a href="https://www.instagram.com/impera.create?igsh=Z2FncGtvN2pidGlo&utm_source=qr" target="_blank"><img src="/images/instagram.png" alt="instagram-logo"></img></a>
          <a href="https://www.facebook.com/profile.php?id=61573540032039" target="_blank"><img src="/images/facebook.png"></img></a>
          
      </div>

      <div className="footer-bottom">
        EmailGigga (c) 2023
      </div>
    </footer>
  );
};

export default Footer;