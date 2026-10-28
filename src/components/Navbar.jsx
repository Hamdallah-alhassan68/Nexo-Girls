import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [involvedDropdownOpen, setInvolvedDropdownOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setAboutDropdownOpen(false);
    setInvolvedDropdownOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <Link className="logo" to="/" onClick={closeMobile}>
          <img src="/img/Nexo-Girls_No_background.png" alt="Nexo Girls logo" />
        </Link>

        <nav>
          {/* Desktop Navigation */}
          <ul className="desktop-menu">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>

            <li className="dropdown">
              <Link to="/about">
                About Us <i className="fa-solid fa-chevron-down"></i>
              </Link>
              <ul className="dropdown-menu">
                <li><NavLink to="/about">About Nexo Girls</NavLink></li>
                <li><NavLink to="/milestones">Milestones</NavLink></li>
                <li><NavLink to="/team">Meet Our Team</NavLink></li>
              </ul>
            </li>

            <li>
              <NavLink to="/programs" className={({ isActive }) => (isActive ? 'active' : '')}>
                Program
              </NavLink>
            </li>

            <li className="dropdown">
              <Link to="/get-involved">
                Get Involved <i className="fa-solid fa-chevron-down"></i>
              </Link>
              <ul className="dropdown-menu">
                <li><NavLink to="/get-involved">Get Involved</NavLink></li>
                <li><NavLink to="/volunteer">Volunteer</NavLink></li>
                <li><NavLink to="/partners">Partners</NavLink></li>
                <li><NavLink to="/ambassadors">Ambassadors</NavLink></li>
              </ul>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                Contact us
              </NavLink>
            </li>

            <li>
              <NavLink to="/donate" className="donate">
                Donate to us
              </NavLink>
            </li>
          </ul>

          {/* Hamburger toggle button */}
          <button
            type="button"
            className="menubutton"
            onClick={() => setMobileOpen(true)}
            aria-label="Open mobile menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-backdrop ${mobileOpen ? 'open' : ''}`}
        onClick={closeMobile}
      ></div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="drawer-top">
          <Link to="/" onClick={closeMobile}>
            <img src="/img/Nexo-Girls_No_background.png" alt="Nexo Girls" />
          </Link>
          <button
            type="button"
            className="close-btn"
            onClick={closeMobile}
            aria-label="Close mobile menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <ul className="mobile-menu">
          <li>
            <NavLink to="/" onClick={closeMobile}>Home</NavLink>
          </li>

          <li>
            <button
              type="button"
              className="mobile-dropdown-toggle"
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
            >
              About Us <i className={`fa-solid fa-chevron-${aboutDropdownOpen ? 'up' : 'down'}`}></i>
            </button>
            {aboutDropdownOpen && (
              <ul className="mobile-submenu">
                <li><NavLink to="/about" onClick={closeMobile}>About Nexo Girls</NavLink></li>
                <li><NavLink to="/milestones" onClick={closeMobile}>Milestones</NavLink></li>
                <li><NavLink to="/team" onClick={closeMobile}>Meet Our Team</NavLink></li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/programs" onClick={closeMobile}>Program</NavLink>
          </li>

          <li>
            <button
              type="button"
              className="mobile-dropdown-toggle"
              onClick={() => setInvolvedDropdownOpen(!involvedDropdownOpen)}
            >
              Get Involved <i className={`fa-solid fa-chevron-${involvedDropdownOpen ? 'up' : 'down'}`}></i>
            </button>
            {involvedDropdownOpen && (
              <ul className="mobile-submenu">
                <li><NavLink to="/get-involved" onClick={closeMobile}>Get Involved</NavLink></li>
                <li><NavLink to="/volunteer" onClick={closeMobile}>Volunteer</NavLink></li>
                <li><NavLink to="/partners" onClick={closeMobile}>Partners</NavLink></li>
                <li><NavLink to="/ambassadors" onClick={closeMobile}>Ambassadors</NavLink></li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMobile}>Contact us</NavLink>
          </li>

          <li className="mobile-donate">
            <NavLink to="/donate" className="donate" onClick={closeMobile}>
              Donate to us
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
