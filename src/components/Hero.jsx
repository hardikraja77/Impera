import React, { useState } from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const phoneNumber = '9976346522';
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null); // 'strategy' or 'specialist'

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    closeModal();
  };

  // Determine modal text based on type
  const modalHeading = modalType === 'specialist' ? 'Ask a Specialist?' : 'Call Now?';
  const modalMessage = modalType === 'specialist'
    ? `Would you like to call our specialist at ${phoneNumber}?`
    : `Would you like to call ${phoneNumber}?`;

  return (
    <section className="hero-banner" id="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="title-line">Scale Your Brand with Data</span>
            <span className="title-line gray-text">-Driven Digital Marketing</span>
          </h1>
          <p className="hero-description">
            We help businesses grow with high-converting strategies in Branding, SEO,
            Social Media, and Web Development. Let's turn your vision into results.
          </p>
          <button
            className="strategy-button"
            onClick={() => openModal('strategy')}
          >
            Book A Free Strategy Call
          </button>
        </div>

        <div className="hero-right">
          <div className="help-box">
            <div className="help-box-icon">
              <img src="/images/Frame.png" alt="Specialist" />
            </div>
            <div className="help-box-content">
              <p className="help-box-title"><strong>Need some help?</strong></p>
              <a
                href="#"
                className="help-box-link"
                onClick={(e) => { e.preventDefault(); openModal('specialist'); }}
              >
                Ask a Specialist
              </a>
            </div>
          </div>
          <div className="help-box">
            <div className="help-box-icon">
              <img src="/images/mesage_icon.png" alt="Msg Logo" />
            </div>
            <div className="help-box-content">
              <p className="help-box-title"><strong>Reach out to us</strong></p>
              <a 
                href="https://forms.gle/JxC2VHCFK57pFG738" 
                target="_blank" 
                rel="noopener noreferrer"
                className="help-box-link"
              >
                Find one near you
              </a>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={`modal-overlay ${showModal ? 'modal-open' : ''}`}>
          <div className="modal-window">
            <h3>{modalHeading}</h3>
            <p>{modalMessage}</p>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={closeModal}>Cancel</button>
              <button className="btn-call" onClick={handleCall}>Call</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}