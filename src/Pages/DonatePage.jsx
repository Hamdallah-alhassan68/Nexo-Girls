import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './DonatePage.css';

const impactData = [
  {
    target: 70000,
    suffix: '+',
    label: 'Girls Empowered Globally',
    category: 'EMPOWERMENT',
    iconClass: 'fa-solid fa-arrow-trend-up',
  },
  {
    target: 56000,
    suffix: '+',
    label: 'Reached through our global Advocacy Campaigns',
    category: 'ADVOCACY',
    iconClass: 'fa-solid fa-bullhorn',
  },
  {
    target: 1300,
    suffix: '+',
    label: 'Trained through our STEAM bootcamps',
    category: 'TRAINING',
    iconClass: 'fa-solid fa-graduation-cap',
  },
  {
    target: 20,
    suffix: '+',
    label: 'Countries reached across Africa and beyond',
    category: 'COMMUNITY',
    iconClass: 'fa-solid fa-earth-africa',
  },
  {
    target: 1940,
    suffix: '',
    label: 'Active community members (#nexogirlies)',
    category: 'COMMUNITY',
    iconClass: 'fa-solid fa-users',
  },
];

const galleryImages = [
  { src: '/img/S1 (2).jpg', alt: 'Nexo Girls Event 1' },
  { src: '/img/S2.jpg', alt: 'Nexo Girls Event 2' },
  { src: '/img/S3.PNG', alt: 'Nexo Girls Workshop 3' },
  { src: '/img/S4.PNG', alt: 'Nexo Girls Mentorship 4' },
  { src: '/img/S5.PNG', alt: 'Nexo Girls Training 5' },
  { src: '/img/S6 (2).jpg', alt: 'Nexo Girls Community 6' },
];

export default function DonatePage() {
  const [counts, setCounts] = useState(impactData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const impactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(
              impactData.map((item) => Math.floor(easeOut * item.target))
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(impactData.map((item) => item.target));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="donate-page-wrapper">
      {/* ================= HERO SECTION ================= */}
      <section className="donate-hero">
        <div className="donate-hero-content">
          <div className="donate-hero-text">
            <span className="donate-hero-tag">
              <i className="fa-solid fa-heart"></i>
              Empowering Girls Through Technology
            </span>

            <h1>Invest in the Future of Girls.</h1>

            <p>
              Every girl deserves the chance to learn, lead, and innovate.
              Your contribution equips young women across Africa and beyond with
              in-demand STEAM skills, mentorship, and career opportunities.
            </p>

            <div className="donate-hero-features">
              <span>
                <i className="fa-solid fa-shield-halved"></i> 100% Transparent
              </span>
              <span>
                <i className="fa-solid fa-handshake"></i> Direct Community Impact
              </span>
              <span>
                <i className="fa-solid fa-certificate"></i> Verified Non-Profit
              </span>
            </div>
          </div>

          <div className="donate-hero-card">
            <div className="donate-box">
              <img src="/img/slide2.jpg" alt="Support Nexo Girls" />
              <h2>How would you love to donate?</h2>
              <p>
                Choose how you would like to partner with us to transform lives and
                expand access to STEAM education.
              </p>

              <div className="donate-options">
                <a href="#individual-donation" className="donate-btn-primary">
                  <i className="fa-solid fa-user"></i>
                  As an Individual
                </a>
                <a href="#organization-donation" className="donate-btn-secondary">
                  <i className="fa-solid fa-building"></i>
                  As an Organization
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DONATION OPTIONS INFO ================= */}
      <section className="donation-channels-section">
        <div className="donation-channels-grid">
          <div className="channel-card" id="individual-donation">
            <h3>
              <i className="fa-solid fa-circle-user"></i>
              Individual Giving
            </h3>
            <p>
              Support individual girls through scholarship funds, bootcamp sponsorships,
              or monthly micro-donations that provide internet access and learning devices.
            </p>
            <div className="channel-details">
              <div><strong>Direct Inquiries:</strong> info@nexogirls.org</div>
              <div><strong>Phone/WhatsApp:</strong> +233 24 521 0865</div>
              <div><strong>Impact:</strong> $25 provides 1 girl with monthly internet & learning resources</div>
            </div>
            <Link to="/contact" className="channel-action-btn">
              <i className="fa-solid fa-envelope"></i> Contact To Donate
            </Link>
          </div>

          <div className="channel-card" id="organization-donation">
            <h3>
              <i className="fa-solid fa-building-columns"></i>
              Corporate & Foundation Giving
            </h3>
            <p>
              Partner your company or foundation with Nexo Girls to sponsor regional hackathons,
              equip tech hubs, or fund full cohort scholarship programs.
            </p>
            <div className="channel-details">
              <div><strong>Partnerships Team:</strong> partnerships@nexogirls.org</div>
              <div><strong>Locations:</strong> Nigeria, Rwanda, Kenya</div>
              <div><strong>Collaboration:</strong> CSR Initiatives, Mentorship, Tech Sponsorships</div>
            </div>
            <Link to="/partners" className="channel-action-btn">
              <i className="fa-solid fa-handshake"></i> Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section id="impact" className="donate-impact-section" ref={impactRef}>
        <div className="donate-impact-header">
          <h2>Our Impact</h2>
          <span className="donate-overline"></span>
        </div>

        <div className="donate-impact-cards">
          {impactData.map((item, index) => (
            <div key={index} className="donate-impact-card">
              <span className="donate-card-badge">{item.category}</span>
              <div className="donate-impact-icon">
                <i className={item.iconClass}></i>
              </div>
              <h3>
                {counts[index].toLocaleString()}
                {item.suffix}
              </h3>
              <p>
                <strong>{item.label}</strong>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="donate-gallery-section">
        <div className="donate-gallery-title">
          <h2>Our Gallery</h2>
          <p>Capturing moments of impact, learning, leadership and community.</p>
        </div>

        <div className="donate-gallery-container">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="donate-gallery-item">
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
