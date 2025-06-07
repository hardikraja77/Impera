import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div id="About" className="about-container">
      <div className="left-panel">
        <div className="top-box">
          <div className="text-section">
            <h1 className="gradient-text">Why Choose <span className="gradient-text">Impera?</span></h1>
            <p>We don't just market—we create strategies that drive impact, engagement, and revenue</p>
          </div>
          <div className="image-section">
            <img src="/images/analysis.png" alt="Analysis" />
          </div>
        </div>

        <div className="bottom-section">
          <div className="middle-box">
            <h2>Your Growth<br />Partner in the<br />Digital Era</h2>
          </div>

          <div className="button-box">
            <button className="about-btn" aria-label="About Us">
              <span>→</span>
            </button>
            <p>About Us</p>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <h2>What Sets Us Apart?</h2>
        <ul className="features-list">
          <li><strong>Results-Driven Approach</strong> - Data-driven strategies for measurable growth.</li>
          <li><strong>Creative & Performance Focused</strong> - A perfect blend of innovation and analytics.</li>
          <li><strong>End to End Solutions</strong> - From branding to digital marketing, all under one roof.</li>
          <li><strong>Client-Centric Solutions</strong> - Custom strategies tailored to your business needs.</li>
          <li><strong>Proven Success</strong> - A track record of delivering exceptional results.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;