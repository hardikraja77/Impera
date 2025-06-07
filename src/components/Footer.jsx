import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>Home</h3>
          <p>Pricing</p>
          <p>Blog</p>
          <p>About us</p>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Cookies Policy</p>
        </div>
        <div className="footer-column glass-card">
          <div className="tweet-card">
            <div className="tweet-header">
              <div className="avatar" />
              <div className="user-info">
                <p className="name">Impera</p>
                <p className="handle">@impera</p>
              </div>
              <i className="fab fa-twitter twitter-icon"></i>
            </div>
            <p className="tweet-content">
              We're just announced new feature that would help you increase your experience!!
            </p>
          </div>
        </div>
      </div>
      <div className="footer-icons">
        <a href="https://www.instagram.com/impera.create?igsh=Z2FncGtvN2pidGlo&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61573540032039" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" />
        </a>
      </div>
      <div className="footer-bottom">
        Impera © 2025 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;