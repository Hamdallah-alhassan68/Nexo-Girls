import React from 'react';
import { Link } from 'react-router-dom';
import './VolunteerPage.css';

export default function VolunteerPage() {
  return (
    <div className="volunteer-page">
      {/* ================= HERO ================= */}
      <section>
        <div className="hero">
          <div className="overlay">
            <h1>Volunteer</h1>
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
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdYBYlcKoyvAjTXftRjJ47-KNhLlD-6flbTAGUDHLgsr2qWFQ/formResponse"
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
              required
              name="entry.1579188386"
            />
            <input
              type="text"
              placeholder="Availability"
              required
              name="entry.601063960"
            />
            <select name="entry.417087554" required defaultValue="">
              <option value="" disabled>Area of Interest</option>
              <option value="Community Management">Community Management</option>
              <option value="People & Culture">People & Culture</option>
              <option value="Content Curation">Content Curation</option>
              <option value="Media & Documentation">Media & Documentation</option>
              <option value="Website Development">Website Development</option>
              <option value="Graphic Design">Graphic Design</option>
            </select>
          </div>

          <textarea
            placeholder="Why this role"
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
