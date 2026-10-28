import React from 'react';
import { Link } from 'react-router-dom';
import './PartnershipPage.css';

export default function PartnershipPage() {
  return (
    <div className="partnership-page">
      {/* ================= HERO ================= */}
      <section>
        <div className="hero">
          <div className="overlay">
            <h1>Let's Collaborate</h1>
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
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfB_vqRXZ8govnNdNYogeGZ9riX8Lxq_DCWWoA8wJ64khLJhw/formResponse"
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
              placeholder="Country"
              required
              name="entry.1579188386"
            />
            <input
              type="text"
              placeholder="City"
              required
              name="entry.601063960"
            />
            <select name="entry.417087554" required defaultValue="">
              <option value="" disabled>Category</option>
              <option value="Schools">Schools</option>
              <option value="NGOs">NGOs</option>
              <option value="Companies">Companies</option>
              <option value="Sponsors">Sponsors</option>
              <option value="Individual Organization">Individual Organization</option>
            </select>
          </div>

          <textarea
            placeholder="Why do you want to partner with us"
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
