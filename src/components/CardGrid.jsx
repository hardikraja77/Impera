import React, { useState } from 'react';
import '../styles/CardGrid.css';

const cardItems = [
  {
    img: '/images/div.png'
  },
  {
    img: '/images/div1.png'
  },
  {
    img: '/images/div2.png'
  },
  {
    img: '/images/div3.png'
  },
];

function CardGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div className="card-slider-wrapper">
  <div className="card-slider">
    {cardItems.map((item, index) => (
      <div
        key={index}
        className={`card-box ${activeIndex === index ? 'active' : activeIndex !== null ? 'blur' : ''}`}
        onClick={() => setActiveIndex(index)}
      >
        <img src={item.img} alt="" className="card-image" />
        {activeIndex === index && (
          <div className="card-details">
            <p>
              More information about <strong>""</strong> goes here.
              You can include descriptions, features, or even buttons here.
            </p>
            <button onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(null);
            }}>
              Close
            </button>
          </div>
        )}
      </div>
    ))}
  </div>
</div>

<div className='txt-container'>
  <div className='txt'>
    <p>from crafting a powerful brand identity to driving traffic,engagement,<br></br>and conversions,we offer a full suite of services to scale your business</p>
  </div>
  <div className='btn-logo'>
    <button>
      Services
      <span class="Arrow">➔</span>
    </button>
  </div>
</div>

    </>
  );
}

export default CardGrid;
