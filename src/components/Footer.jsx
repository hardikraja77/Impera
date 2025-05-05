import React from 'react';
import '../styles//Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src="/images/logo.png" alt="Impera Logo" className="footer-logo" />
        </div>
        <div className="footer-center">
          <a href="#">Home</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">About us</a>
        </div>
        <div className="footer-right">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>EmailGigga (c) 2023</p>
      </div>
    </footer>
  );
}
