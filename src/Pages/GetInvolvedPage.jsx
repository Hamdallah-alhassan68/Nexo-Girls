import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './GetInvolvedPage.css';

const galleryImages = [
  'S1 (2).jpg',
  'S3.PNG',
  'S4.PNG',
  'S5.PNG',
  'slide4.jpeg',
  'S6 (2).jpg'
];

export default function GetInvolvedPage() {
  const impactRef = useRef(null);
  const [impactCount, setImpactCount] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);

          const duration = 2000;
          const startTime = performance.now();
          const target = 70000;

          const updateCount = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);

            setImpactCount(current);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setImpactCount(target);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.25 }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  return (
    <div className="get-involved-page">
      {/* ================= HERO ================= */}
      <section>
        <div className="hero">
          <div className="overlay">
            <p>
              Empowering girls through mentorship, technology, leadership, and community impact to create opportunities for the next generation.
            </p>
            <a href="#impact" className="btn">See Our Impact</a>
          </div>
        </div>
      </section>

      {/* ================= GET INVOLVED CARDS ================= */}
      <section className="get-involved-section">
        <div id="ostory">
          <h2>Get Involved</h2>
          <span className="overline"></span>
          <p className="mission-text">
            Join us in empowering girls through education, mentorship, leadership, and technology.
          </p>
        </div>

        <div className="involve-grid">
          {/* 1. Donate */}
          <div className="involve-card">
            <h3>Donate</h3>
            <p>Your support helps provide:</p>
            <ul>
              <li>Money</li>
              <li>Laptops</li>
              <li>Internet Access</li>
              <li>Books & Learning Materials</li>
              <li>Hygiene products</li>
            </ul>
            <Link to="/donate" className="program-btn">Donate Now</Link>
          </div>

          {/* 2. Volunteer */}
          <div className="involve-card">
            <h3>Volunteer</h3>
            <ul>
              <li>Community Mgt</li>
              <li>People & Culture</li>
              <li>Content Curation</li>
              <li>Media & Documentation</li>
              <li>Website Development</li>
              <li>Graphic</li>
            </ul>
            <Link to="/volunteer" className="program-btn">Become a Volunteer</Link>
          </div>

          {/* 3. Partner */}
          <div className="involve-card">
            <h3>Partner With Us</h3>
            <p>Collaborate with us as:</p>
            <ul>
              <li>Schools</li>
              <li>NGOs</li>
              <li>Companies</li>
              <li>Sponsors</li>
              <li>Individual Organizations</li>
            </ul>
            <Link to="/partners" className="program-btn">Partner With Us</Link>
          </div>

          {/* 4. Ambassador */}
          <div className="involve-card">
            <h3>Become An Ambassador</h3>
            <p>Help us in Outreach:</p>
            <ul>
              <li>Nigeria</li>
              <li>Rwanda</li>
              <li>Kenya</li>
              <li>Ghana</li>
            </ul>
            <Link to="/ambassadors" className="program-btn">Become An Ambassador</Link>
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <div id="ostory">
        <h2>Our Impact</h2>
        <span className="overline"></span>
      </div>

      <section className="story-section" id="impact" ref={impactRef}>
        <div className="story-grid">
          <div className="video-container">
            <img src="/img/slide8.jpg" alt="Nexo Girls Impact" />
          </div>

          <div className="story-content">
            <blockquote className="founder-quote">
              <h3 className="impact-number">{impactCount.toLocaleString()}+</h3>
              Our 3 years of operations have led to an impact reach of 70,014 young women
              across Africa and beyond. On all of our platforms, we have received 50-70% of
              input from young women.
            </blockquote>
          </div>

          <div className="video-container">
            <img src="/img/slide3.jpg" alt="Nexo Girls Community" />
          </div>
        </div>
      </section>

      {/* ================= UPCOMING OPPORTUNITIES ================= */}
      <section className="opportunities-section">
        <div id="ostory">
          <h2>Upcoming Opportunities</h2>
          <span className="overline"></span>
        </div>

        <div className="opportunity-grid">
          <div className="opportunity-card">
            <h3>Tech Summer Camp</h3>
            <p>An engaging digital skills and innovation camp for girls during the summer break.</p>
          </div>

          <div className="opportunity-card">
            <h3>Leadership Workshops</h3>
            <p>Interactive workshops focused on leadership, confidence, and public speaking.</p>
          </div>

          <div className="opportunity-card">
            <h3>Community Outreach</h3>
            <p>Volunteer opportunities to support girls in underserved communities.</p>
          </div>

          <div className="opportunity-card">
            <h3>Volunteer Openings</h3>
            <p>Join our growing team and help organize events, trainings, and mentorship sessions.</p>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="gallery">
        <div className="gallery-title">
          <h2>Our Gallery</h2>
          <p>Capturing moments of impact, learning, leadership and community.</p>
        </div>

        <div className="gallery-container">
          {galleryImages.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img src={`/img/${src}`} alt={`Gallery moment ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="faq-section">
        <div id="ostory">
          <h2>Frequently Asked Questions</h2>
          <span className="overline"></span>
        </div>

        <div className="faq-container">
          <div className="faq-item">
            <h3>Do I need experience to volunteer?</h3>
            <p>No. Anyone passionate about supporting girls and education is welcome to volunteer.</p>
          </div>

          <div className="faq-item">
            <h3>Can international mentors join?</h3>
            <p>Yes. Mentors from different countries can support virtually or during special programs.</p>
          </div>

          <div className="faq-item">
            <h3>Is participation free?</h3>
            <p>Most of our programs are free for participants.</p>
          </div>

          <div className="faq-item">
            <h3>How can schools partner with Nexo Girls?</h3>
            <p>Schools can collaborate with us for workshops, outreach programs, and mentorship activities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
