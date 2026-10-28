import React from 'react';
import { Link } from 'react-router-dom';
import './MilestonesPage.css';

export default function MilestonesPage() {
  return (
    <div className="milestones-page">
      {/* ================= HERO ================= */}
      <div className="hero">
        <div className="overlay">
          <h1>Nexo Girls Journey & Impact Story</h1>
          <p>
            A story of growth, community, and empowering girls across Africa through technology.
          </p>
          <Link className="btn" to="/get-involved">Get Involved</Link>
        </div>
      </div>

      {/* ================= TIMELINE SECTION ================= */}
      <section className="nexo-timeline">
        <div className="timeline-grid">
          {/* Left Cards */}
          <div className="timeline-side left">
            <article className="story-card">
              <img src="/img/slide5.JPG" alt="The Beginning 2022" />
              <div className="card-overlay">
                <span className="tag">2022</span>
                <h3>The Beginning</h3>
              </div>
            </article>

            <article className="story-card">
              <img src="/img/techcamp.jpeg" alt="Training Program 2023" />
              <div className="card-overlay">
                <span className="tag">2023</span>
                <h3>Training Program</h3>
              </div>
            </article>

            <article className="story-card">
              <img src="/img/slide6.PNG" alt="Community Growth 2026" />
              <div className="card-overlay">
                <span className="tag">2026</span>
                <h3>Community Growth</h3>
              </div>
            </article>
          </div>

          {/* Timeline Center Node Items */}
          <div className="timeline-center">
            <div className="timeline-item">
              <div className="year">2020-2021</div>
              <div className="node"></div>
              <div className="content">
                <h3>The Beginning</h3>
                <p>
                  Nexo Girls started with a simple mission: To empower young girls to unlock their full potential and become catalysts for change through comprehensive education, digital literacy programs, and strategic partnerships.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="year">2022-2024</div>
              <div className="node"></div>
              <div className="content">
                <h3>Executing of Project</h3>
                <p>
                  A flagship digital skills training program designed to equip young women with basics of 8 career-ready skills in tech, leadership, and entrepreneurship in 8 days. A project focused on body autonomy, menstrual hygiene, and self-awareness. A video Advocacy Campaign amplifying girls' visions for the future.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="year">2024-2026</div>
              <div className="node"></div>
              <div className="content">
                <h3>Expanding Outreach</h3>
                <p>
                  A mentorship initiative matching young women with professionals for career and growth. Increasing our impact across different countries and partnering with organizations supporting our mission. Expanding to 3 different countries: Nigeria, Rwanda, and Kenya.
                </p>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="timeline-side right">
            <article className="story-card">
              <img src="/img/Menstural_advocacy.jpg" alt="Advocacy 2020" />
              <div className="card-overlay">
                <span className="tag">2020</span>
                <h3>Advocacy</h3>
              </div>
            </article>

            <article className="story-card">
              <img src="/img/slide1.jpg" alt="Awards 2022" />
              <div className="card-overlay">
                <span className="tag">2022</span>
                <h3>Awards</h3>
              </div>
            </article>

            <article className="story-card">
              <img src="/img/collaboration.jpg" alt="Future Forward 2025" />
              <div className="card-overlay">
                <span className="tag">2025</span>
                <h3>Future Forward</h3>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
