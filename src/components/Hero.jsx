import React, { useState } from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const phoneNumber = '9976346522';
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null); // 'strategy' or 'specialist'

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

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
      <div className="hero-left">
        <h1>Scale Your Brand with Data</h1>
        <h1 className="gray-text">-Driven Digital Marketing</h1>
        <p>
          We help businesses grow with high-converting strategies in Branding, SEO,
          <br />
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
          <img src="/images/Frame.png" alt="Specialist" />
          <div>
            <p><strong>Need some help?</strong></p>
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
          <img src="/images/mesage_icon.png" alt="Msg Logo" />
          <div>
            <p><strong>Reach out to us</strong></p>
            <a href="https://forms.gle/JxC2VHCFK57pFG738" target="_blank" rel="noopener noreferrer">Find one near you</a>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
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