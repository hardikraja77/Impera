import React, { useState } from 'react';
import '../styles/CardGrid.css';

const cardItems = [
  {
    tag: 'Digital',
    title: 'SEO',
    img: '/images/seo1.png'
  },
  {
    tag: 'Social Media',
    title: 'Social Ads',
    img: '/images/social_media_marketing.png'
  },
  {
    tag: 'Graphic Design',
    title: 'Logo Design',
    img: '/images/graphic.jpeg'
  }
];

function CardGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div className="card-grid">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className={`card-box ${activeIndex === index ? 'active' : activeIndex !== null ? 'blur' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <p className="card-tag">{item.tag}</p>
            <h2 className="card-title">{item.title}</h2>
            <img src={item.img} alt={item.title} className="card-image" />
            
            {activeIndex === index && (
              <div className="card-details">
                <p>
                  More information about <strong>{item.title}</strong> goes here.
                  You can include descriptions, features, or even buttons here.
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(null);
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="video-container" id="vid">
        <video controls>
          <source src="/images/Niral.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default CardGrid;
