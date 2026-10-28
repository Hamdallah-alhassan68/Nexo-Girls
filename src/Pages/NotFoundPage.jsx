import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-content">
        <div className="not-found-icon">
          <i className="fa-solid fa-compass"></i>
        </div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you are looking for doesn't exist or has been moved.
          Let's get you back to empowering girls with Nexo Girls.
        </p>
        <Link to="/" className="not-found-btn">
          <i className="fa-solid fa-house"></i>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
