import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './DonationPopup.css';

export default function DonationPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('popupClosed')) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem('popupClosed', 'true');
  };

  return (
    <div className={`donation-popup ${show ? 'show' : ''}`} id="donationPopup">
      <button
        type="button"
        className="popup-close"
        id="closePopup"
        onClick={handleClose}
        aria-label="Close donation popup"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className="popup-icon">🤝</div>

      <h3>Support the Next Generation</h3>

      <p>
        Every contribution helps Nexo Girls provide digital skills,
        mentorship, leadership training, and STEM opportunities for girls.
      </p>

      <div className="popup-buttons">
        <Link to="/donate" className="donate-btn" onClick={handleClose}>
          Donate Now
        </Link>
      </div>
    </div>
  );
}
