import React from 'react';
import '../styles/EmailBanner.css';
import { Play } from 'lucide-react';

export default function EmailBanner() {
  const scrollToVideo = () => {
    const videoElement = document.getElementById('vid');
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="email-banner">
      <div className="banner-content">
        <h1>Unlock the Potential of Your<br />Campaigns with Our Intuitive Software</h1>
        <p>
          We invite you to embark on this exciting email marketing journey with us.
          At <strong>emailgigga</strong>, we believe in a collaborative approach,
          where our clients become our partners. Together, we can shape a future
          where mailing possibilities are limitless.
        </p>
        <div className="banner-buttons">
          <button className="btn-primary">Get started</button>
          <button className="btn-outline" onClick={scrollToVideo}>
            <Play size={16} style={{ marginRight: '8px' }} />
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
}
