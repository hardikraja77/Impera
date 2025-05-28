import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div id="About" className="about-container">
      <div className="left-panel">
        <div className="top-box">
          <div className="text-section">
            <h1>Why Choose</h1>
            <h1>Impera?</h1>
            <p>We don’t just market—we create strategies that drive impact, engagement, and revenue</p>
          </div>
          <div className="image-section">
            <img src="/images/analysis.png" alt="Analysis" />
          </div>
        </div>

        <div className='sep'>
        
        <div className="middle-box">
          <h2>Your Growth<br />Partner in the<br />Digital Era</h2>
        </div>

        <div className="button-box">
          <button className="about-btn">
            <span>→</span><br />
          </button>
          <p>About Us</p>
        </div>
        </div>
      </div>

      <div className="right-panel">
        <h2>What Sets Us Apart?</h2>
        <p><strong>Results-Driven Approach</strong> - Data-driven strategies for measurable growth.</p>
        <p><strong>Creative & Performance</strong> - Focused - A perfect blend of innovation and analytics.</p>
        <p><strong>End to End Solutions</strong> - From branding to digital marketing, all under one roof.</p>
        <p><strong>Client-Centric Solutions</strong> - Custom strategies tailored to your business needs.</p>
        <p><strong>Proven Success</strong> - A track record of delivering exceptional results.</p>
      </div>
    </div>
  );
}

export default About;
