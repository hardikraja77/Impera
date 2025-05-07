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
    <div className="banner-buttons">
      <button className="btn-outline">Book A Free Strategy Call</button>
      <button className="btn-primary">
        Get Started
      </button>
    </div>
  </div>
</section>

  );
}
