import React, { useState } from 'react';
import '../styles/ZoomRedirectImage.css';

const ZoomRedirectImage = () => {
  const [zoomed, setZoomed] = useState(false);

  const handleClick = () => {
    setZoomed(true);
    setTimeout(() => {
      window.location.href = 'localhost:5713'; // 🔁 Change to your URL
    }, 1000); // Match with transition duration
  };

  return (
    <div className={`zoom-container ${zoomed ? 'zoomed' : ''}`} onClick={handleClick}>
      <img src="/images/hero_image.png" alt="Preview" />
    </div>
  );
};

export default ZoomRedirectImage;
