
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer({ showCta = true }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    console.log('Email submitted:', email);
  };

  return (
    <footer>
      {/* Main Footer */}
      <section className="footer" id="footer">

        {/* Contact Info Column */}
        <div className="footer-box">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="tel:+233245210865">
                <i className="fa-solid fa-phone"></i>
                {' '}+233245210865
              </a>
            </li>
            <li>
              <a href="mailto:info@nexogirls.org">
                <i className="fa-solid fa-envelope"></i>
                {' '}info@nexogirls.org
              </a>
            </li>
            <li>
              <a
                href="https://lnk.bio/nexogirls"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-globe"></i>
                {' '}www.nexogirls.org
              </a>
            </li>
          </ul>
<br/>
          <strong>Follow Us On Social Media</strong>

          <div className="social">
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
              aria-label="X"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        {/* About Us Column */}
        <div className="footer-box">
          <h3>About Us</h3>
          <ul>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/#impact">Our Impact</Link></li>
            <li><Link to="/#Partners">Our Partners</Link></li>
            <li><Link to="/team">Meet the Team</Link></li>
          </ul>
        </div>

        {/* Useful Links Column */}
        <div className="footer-box">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/donate">Donating To Us</Link></li>
            <li><Link to="/volunteer">Applying to Volunteer</Link></li>
            <li><Link to="/partners">Become A Partner</Link></li>
            <li><Link to="/ambassadors">Become An Ambassador</Link></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="footer-box">
          <h3>Make Suggestion</h3>

          <p>
            You can make a suggestion or ask a question by sending
            us an email. You can also subscribe to our newsletter.
          </p>

          <section className="subscribe-section">
            <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfI9k3oMDhpS2TiALMcLrsrp-cB7XTEtC8P_ZgkY8XS1BNmOA/formResponse"
              className="subscribe-form"
              method="POST"
              target="_blank"
             
            >
              <div className="subscribe-input-group">
                <input
                  type="email"
                  name="entry.2130381829"  // Replace with your actual Google Form field name
                  placeholder="Type your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Your email address"
                  required
                />

                <button type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </section>

          <img
            src="/img/robert.png"
            alt="Nexo Girls mascot"
            className="footer-robot-img"
          />
        </div>
      </section>

      {/* Copyright Bar */}
      <div className="copyright">
        <p>All rights reserved Nexo Girls © 2026</p>
      </div>
    </footer>
  );
}
