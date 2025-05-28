// components/AnimatedCard.jsx
import React from 'react';
import '../styles/AnimatedCard.css';

function Animatedard() {
  return (
    <div className="parent">
      <div className="card">
        <div className="logo">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
          <span className="circle circle4"></span>
          <span className="circle circle5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" className="svg">
              <path d="M12.827,1.628A1.561..." />
              {/* Continue SVG Paths */}
            </svg>
          </span>
        </div>
        <div className="glass"></div>
        <div className="content">
          <span className="title">UIVERSE (3D UI)</span>
          <span className="text">Create, share, and use beautiful custom elements made with CSS</span>
        </div>
        <div className="bottom">
          <div className="social-buttons-container">
            <button className="social-button">
              <svg viewBox="0 0 30 30" className="svg">
                <path d="..." />
              </svg>
            </button>
            {/* Add other social buttons similarly */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedCard;
