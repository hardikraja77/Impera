import React from 'react';
import '../styles/EmailBanner.css';
import bannerImage from '/images/impera_cta.png'; // Adjust path as needed

export default function EmailBanner() {
  return (
    <section id="Contact" className="email-banner">
      <div className="banner-container">
        <img 
          src={bannerImage} 
          alt="Let's Grow Your Business" 
          className="banner-image" 
        />
        <div className="banner-content">
          <div className="banner-buttons">
            <button className="btn-outline">Book A Free Strategy Call</button>
            <button className="btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}