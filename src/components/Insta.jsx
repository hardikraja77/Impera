import React, { useEffect, useState } from 'react';
import '../styles/Insta.css';


const images = [
  '/images/insta.png',
  '/images/facebook1.png',
  '/images/twitter.png',
  '/images/youtube.png',
];

function Insta() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getPositionClass = (index) => {
    if (index === currentIndex) return 'center';
    if ((index + 1) % images.length === currentIndex) return 'left';
    if ((index - 1 + images.length) % images.length === currentIndex) return 'right';
    return 'hidden';
  };

  return (
    <div id="Service" className="out_con">
      <div className="con">
        <h1>End-To-End</h1>
        <h1 className="col">Digital Marketing</h1>
        <h1 className="gra">Solutions For</h1>
        <h1 className="gra">Maximum Growth</h1>
      </div>
      <div className="img">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`carousel-img ${getPositionClass(index)}`}
            alt={`img-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Insta;
