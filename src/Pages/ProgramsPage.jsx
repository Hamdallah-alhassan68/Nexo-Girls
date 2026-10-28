import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProgramsPage.css';

const allPrograms = [
  // ================= TECH =================
  {
    id: 'tech-1',
    category: 'tech',
    tag: 'Tech',
    title: 'Upskill 1.0',
    description: 'The first cohort introducing girls to digital literacy, coding, innovation, and essential technology skills.',
    image: '/img/upskill1.jpg'
  },
  {
    id: 'tech-2',
    category: 'tech',
    tag: 'Tech',
    title: 'Upskill 2.0',
    description: 'Expanded hands-on training in programming, problem-solving, leadership, and digital innovation.',
    image: '/img/Upskill 2.0 YT Thumbnail.png'
  },
  {
    id: 'tech-3',
    category: 'tech',
    tag: 'Tech',
    title: 'Upskill 3.0',
    description: 'Preparing girls with future-ready digital skills, innovation, and emerging technology knowledge.',
    image: '/img/upcoming.jpg'
  },
  {
    id: 'tech-4',
    category: 'tech',
    tag: 'Tech',
    title: 'Girls Hack for Impact',
    description: 'An initiative that empowers young women to use technology to solve community challenges, build innovative solutions, gain practical skills, and receive mentorship throughout the program.',
    image: '/img/hackimapct.jpg'
  },
  {
    id: 'tech-5',
    category: 'tech',
    tag: 'Tech',
    title: 'Tech Summer Camp',
    description: 'A fun and engaging summer experience where girls learn, build projects, and explore technology creatively.',
    image: '/img/change.jpg'
  },
  {
    id: 'tech-6',
    category: 'tech',
    tag: 'Tech',
    title: 'Girls in STEM',
    description: 'Inspiring girls to confidently pursue careers in Science, Technology, Engineering, and Mathematics.',
    image: '/img/summercamp.jpg'
  },
  {
    id: 'tech-7',
    category: 'tech',
    tag: 'Tech',
    title: 'Digital Literacy Training',
    description: 'Equipping girls with essential digital skills to safely, confidently, and effectively use technology.',
    image: '/img/techsummer.jpeg'
  },

  // ================= ADVOCACY =================
  {
    id: 'adv-1',
    category: 'advocacy',
    tag: 'Advocacy',
    title: 'My Body My Pride',
    description: 'A project focused on body autonomy, menstrual hygiene, and self-awareness.',
    image: '/img/My_body_my_pride.JPG'
  },
  {
    id: 'adv-2',
    category: 'advocacy',
    tag: 'Advocacy',
    title: 'Women Art Advocacy',
    description: "Harnessing the power of art and creativity to promote gender equality, inspire dialogue, and amplify women's voices.",
    image: '/img/instasave.website_432757859_829781808889646_4875836339539165059_n.heic'
  },
  {
    id: 'adv-3',
    category: 'advocacy',
    tag: 'Advocacy',
    title: '16 Days Loud It Quotes Campaign',
    description: 'A campaign held during the 16 Days of Activism against Gender-Based Violence, using powerful quotes and storytelling to raise awareness and inspire action.',
    image: "/img/16 days Loud it quotes'24.png"
  },
  {
    id: 'adv-4',
    category: 'advocacy',
    tag: 'Advocacy',
    title: 'International Day of the Girl Child Video Advocacy',
    description: "A digital advocacy campaign celebrating girls' achievements while highlighting the importance of equal opportunities, education, and empowerment.",
    image: '/img/739245-NexoGirls-1.png'
  },
  {
    id: 'adv-5',
    category: 'advocacy',
    tag: 'Advocacy',
    title: "Women's History Month Campaign",
    description: 'Celebrating the achievements of women throughout history while inspiring the next generation of girls.',
    image: '/img/women.jpg'
  },

  // ================= COMMUNITY PROJECTS =================
  {
    id: 'comm-1',
    category: 'community',
    tag: 'Community Project',
    title: 'Feel Free Write (FF2WRITE)',
    description: 'A volunteer-led literacy initiative encouraging reading, writing, creativity, and self-expression among children.',
    image: '/img/free.jpg'
  },
  {
    id: 'comm-2',
    category: 'community',
    tag: 'Community Project',
    title: 'Dash & Tell',
    description: 'Guides participants through the essentials of data analytics, helping beginners turn their Excel skills into a real-world project.',
    image: '/img/dash&tell.jpg'
  },
  {
    id: 'comm-3',
    category: 'community',
    tag: 'Community Project',
    title: 'The "Only woman in the Room" Syndrome Webinar',
    description: 'Empowers women in Science, Technology, Engineering, Arts and Mathematics (STEAM) fields to combat isolation, build confidence, and discover strategies for thriving in their careers.',
    image: '/img/owitrsyndrome.png'
  },

  // ================= MENTORSHIP =================
  {
    id: 'ment-1',
    category: 'mentorship',
    tag: 'Mentorship',
    title: 'PropelHer',
    description: 'Connecting girls with mentors who provide career guidance, leadership development, and personal growth support.',
    image: '/img/slide5.JPG'
  },
  {
    id: 'ment-2',
    category: 'mentorship',
    tag: 'Mentorship',
    title: 'High School Mentorship',
    description: 'Supporting girls through mentorship, innovation, leadership, and educational opportunities.',
    image: '/img/gski.jpg'
  }
];

export default function ProgramsPage() {
  const [filter, setFilter] = useState('all');

  const filteredPrograms =
    filter === 'all'
      ? allPrograms
      : allPrograms.filter((item) => item.category === filter);

  return (
    <div className="programs-page">
      {/* ================= HERO ================= */}
      <div className="hero">
        <div className="overlay">
          <h1>Nexo Girls</h1>
          <p>Empower . Connect . Thrive</p>
          <Link className="btn" to="/get-involved">Get Involved</Link>
        </div>
      </div>

      {/* ================= PROGRAMS SECTION ================= */}
      <section className="programs-section">
        <div id="ostory">
          <h2>Our Programs</h2>
          <span className="overline"></span>
        </div>

        {/* Filter Buttons */}
        <div className="program-filters">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'tech' ? 'active' : ''}`}
            onClick={() => setFilter('tech')}
          >
            Tech
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'advocacy' ? 'active' : ''}`}
            onClick={() => setFilter('advocacy')}
          >
            Advocacy
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'community' ? 'active' : ''}`}
            onClick={() => setFilter('community')}
          >
            Community Projects
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'mentorship' ? 'active' : ''}`}
            onClick={() => setFilter('mentorship')}
          >
            Mentorship
          </button>
        </div>

        {/* Program Cards Grid */}
        <div className="programs-container">
          {filteredPrograms.map((prog) => (
            <div className={`program-card ${prog.category}`} key={prog.id}>
              <img src={prog.image} alt={prog.title} />
              <div className="program-content">
                <span className="tag">{prog.tag}</span>
                <h3>{prog.title}</h3>
                <p>{prog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
