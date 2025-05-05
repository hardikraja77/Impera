import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero-banner">
      <div className="hero-left">
        <h1>Fuel your Growth with</h1>
        <h1 className="gray-text">Personalized Dynamic Creatives</h1>
      </div>
      <div className="hero-right">
        <div className="help-box">
          <img src="/images/sai.jpeg" alt="Specialist" />
          <div>
            <p><strong>Need some help?</strong></p>
            <a href="#">Ask a Specialist</a>
          </div>
        </div>
        <div className="help-box">
          <img src="/images/mesage_icon.png" alt="Msg_Logo"></img>
          <div>
            <p><strong>Reach out us</strong></p>
            <a href="#">Find one near you</a>
          </div>
        </div>
      </div>
    </section>
  );
}