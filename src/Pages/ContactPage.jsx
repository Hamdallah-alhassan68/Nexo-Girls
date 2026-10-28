import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Note: The form natively posts to Google Forms, and we provide visual feedback
    setSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper">
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Nexo Girls</h1>
          <Link to="/get-involved" className="contact-hero-btn">
            Get Involved
          </Link>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <span className="contact-overline"></span>
          <p className="contact-subtext">
            We'd love to hear from you. Reach out to us for partnerships, mentorship,
            volunteering, or general inquiries.
          </p>
        </div>

        <div className="contact-container">
          {/* Contact Details Cards */}
          <div className="contact-info">
            <div className="contact-box">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@nexogirls.org">info@nexogirls.org</a>
              </p>
            </div>

            <div className="contact-box">
              <h3>Phone</h3>
              <p>
                <a href="tel:+233245210865">+233 24 521 0865</a>
              </p>
            </div>

            <div className="contact-box">
              <h3>Location</h3>
              <p>Nigeria, Rwanda, Kenya</p>
            </div>

            <div className="contact-box">
              <h3>Follow us</h3>
              <div className="contact-socials">
                <a
                  href="https://www.facebook.com/nexogirls"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/nexogirls"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/nexogirls/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.youtube.com/@nexogirls"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a
                  href="https://x.com/nexogirls"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form submitting to Google Forms */}
          <form
            className="contact-form"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSf4wKT7UG01WIxlPGeoqnrYkcgy8dJ_6YxIcnvN3kk6BI9krQ/formResponse"
            method="POST"
            target="_blank"
            onSubmit={handleSubmit}
          >
            {submitted && (
              <div
                style={{
                  background: '#d4edda',
                  color: '#155724',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  fontWeight: 600,
                  fontSize: '14px',
                }}
              >
                Thank you! Your message has been sent.
              </div>
            )}

            <div className="contact-grid">
              <input
                type="text"
                placeholder="Full Name"
                required
                name="entry.1282914891"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                name="entry.1356447643"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                name="entry.1886028022"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                name="entry.1579188386"
              />
            </div>

            <textarea
              placeholder="Write your message here..."
              required
              name="entry.601063960"
            ></textarea>

            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
