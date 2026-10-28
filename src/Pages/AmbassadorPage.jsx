import React from 'react';
import { Link } from 'react-router-dom';
import './AmbassadorPage.css';

export default function AmbassadorPage() {
  return (
    <div className="ambassador-page">
      {/* ================= HERO ================= */}
      <section>
        <div className="hero">
          <div className="overlay">
            <h1>Become An Ambassador</h1>
            <p className="join">Ready to Rise, Lead, and Make an Impact?</p>
            <Link to="/contact" className="btn primary-btn">Join Us</Link>
          </div>
        </div>
      </section>

      {/* ================= APPLICATION FORM ================= */}
      <section className="application-section">
        <div id="ostory">
          <h2>Application Form</h2>
          <span className="overline"></span>
        </div>

        <form
          className="involve-form"
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfNUAaUBd7dlszXU5miOgB84_7SHU86hRpf3nNBbhDoKJUXOQ/formResponse"
          method="POST"
          target="_blank"
        >
          <div className="form-grid">
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
              placeholder="Skills"
              name="entry.1579188386"
            />
            <input
              type="text"
              placeholder="Availability"
              name="entry.601063960"
            />
            <select name="entry.417087554" required defaultValue="">
              <option value="" disabled>Area of Interest</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Kenya">Kenya</option>
            </select>
          </div>

          <textarea
            placeholder="Why do you want to become an Ambassador"
            required
            name="entry.248865592"
          ></textarea>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
}
