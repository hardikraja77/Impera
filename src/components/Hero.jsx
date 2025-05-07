import React from 'react';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero-banner">
      <div className="hero-left">
        <h1>Scale Your Brand with Data</h1>
        <h1 className="gray-text">-Driven Digital Marketing</h1>
        <p>We help businesses grow with high-converting strategies in Branding,SEO,<br></br>Social Media,and Web Development.Let's turn your vision into results.</p>
        <button>Book A Free Strategy Call</button>
      </div>
      <div className="hero-right">
        <div className="help-box">
          <img src="/images/Frame.png" alt="Specialist" />
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