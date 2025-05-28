import React from 'react';
import '../styles/EmailBanner.css';
import { Play } from 'lucide-react';

export default function EmailBanner() {
  

  return (
    <section id="Contact" className="email-banner">
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
