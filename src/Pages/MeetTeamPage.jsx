import React, { useState } from 'react';
import './MeetTeamPage.css';

const volunteers2026 = [
  { name: 'Benita Oloniyo', role: 'Community Management — Lead', image: '/img/BENITA OLONIYO.JPG' },
  { name: 'Ann', role: 'Community Management — Assistance', image: 'https://img.freepik.com/premium-photo/confident-determined-west-african-woman-isolated-solid-background-copy-space-available_765582-11393.jpg' },
  { name: 'Augustine Chinonso Favour', role: 'People & Culture — Lead', image: '/img/chinoso.jpeg' },
  { name: 'Chidimma', role: 'People & Culture — Assistance', image: 'https://tse1.explicit.bing.net/th/id/OIP.PSYzSypymWp-vN3tQeXQPwHaE8?r=0&w=1000&h=667&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'Eniola Ibrahim', role: 'Content Curation — Lead', image: '/img/ENIOLA IBRAHIM .jpg' },
  { name: 'Scholastical', role: 'Content Curation — Assistance', image: 'https://static.vecteezy.com/system/resources/previews/056/505/049/large_2x/a-black-woman-in-a-business-suit-smiling-free-photo.jpeg' },
  { name: 'Hamdallah Alhassan', role: 'Website Development — Lead', image: '/img/Hamda.jpg' },
  { name: 'Moses', role: 'Graphics', image: 'https://media.istockphoto.com/id/2147703311/photo/black-man-is-in-the-studio-against-yellow-background.jpg?s=170667a&w=0&k=20&c=FRQey44kD6kcZgF8LhHlCwkcdsun24OUQlrc6KHoKZg=' },
  { name: 'Habeebah', role: 'Communication & Partnerships — Lead', image: 'https://static.vecteezy.com/system/resources/previews/012/443/949/non_2x/black-muslim-business-woman-working-on-laptop-computer-free-photo.JPG' },
  { name: 'Sakeenat', role: 'Communication & Partnerships — Assistance', image: 'https://gbvwr.ca/wp-content/uploads/2023/06/AdobeStock_573580967-scaled.jpeg' },
  { name: 'Linda', role: 'Event Coordination — Lead', image: 'https://static.vecteezy.com/system/resources/thumbnails/056/505/078/small_2x/a-beautiful-black-woman-in-a-business-suit-free-photo.jpeg' },
  { name: 'Favor Ayuk', role: 'Event Coordination — Assistance', image: '/img/favor.jpeg' },
];

const volunteers2025 = [
  { name: 'Ezeliora Godsfavour', role: 'Community Management', image: '/img/Ezeliora Godsfavour .JPG' },
  { name: 'Ogho Francisca Ogheneochuko', role: 'Outreach team', image: '/img/Francisca Ogheneochuko Ogho.png' },
  { name: 'Theodora Omunizua', role: 'Events Coordinator', image: '/img/Theodora Omunizua.JPG' },
  { name: 'Idara Patrick Essien', role: 'Outreach Coordinator', image: '/img/IDARA PATRICK.JPG' },
  { name: 'Benita Oloniyo', role: 'Community Management Lead', image: '/img/BENITA OLONIYO.JPG' },
  { name: 'Augustine Chinonso Favour (Lunar)', role: 'Content Curation Lead', image: '/img/Augustine Chinonso.jpg' },
  { name: 'Eniola Ibrahim', role: 'Content Curator (Asst.)', image: '/img/ENIOLA IBRAHIM .jpg' },
  { name: 'Abigail Adeponle', role: 'Outreach team', image: '/img/Abigail Adeponle .jpg' },
];

const volunteers2022 = [
  { name: 'Bello Salimat Morenikeji', role: 'Acting CEO', image: '/img/Salimat Bello.png' },
  { name: 'Dada Oluwabusola Mojolaoluwa', role: 'Researcher', image: '/img/Mojolaoluwa Dada.jpg' },
  { name: 'Ogho Francisca Ogheneochuko', role: 'Financial Analyst', image: '/img/Francisca Ogheneochuko Ogho.png' },
  { name: 'Blessing Bolaji', role: 'Partnerships & Blog Team Lead', image: '/img/Blessing Bolaji.jpg' },
  { name: 'David Victor', role: 'Graphic Designer', image: '/img/David Victor.png' },
  { name: 'Gladens Popoola', role: 'Programs Lead', image: '/img/Gladens Popoola.jpeg' },
  { name: 'Patience Dominic', role: 'Ambassador (Delta State)', image: '/img/Patience Dominic.jpg' },
  { name: 'OMOJEMINIYI DAMILOLA', role: 'Content Creator', image: '/img/OMOJEMINIYI DAMILOLA.jpg' },
  { name: 'Joshua Chinaza David', role: 'Social Media Manager', image: '/img/Joshua Chinanz David.jpg' },
];

export default function MeetTeamPage() {
  const [activeTab, setActiveTab] = useState('v2026');

  return (
    <div className="meet-team-page">
      {/* ================= HERO ================= */}
      <div className="hero">
        <div className="overlay">
          <h1>Empowering Girls to Lead, Innovate, and Thrive</h1>
          <p>
            Creating opportunities for young women through education,
            digital skills, mentorship, and leadership development.
          </p>
        </div>
      </div>

      {/* ================= BOARD OF DIRECTORS ================= */}
      <section className="team-section">
        <div id="ostory">
          <h2>Meet Our Team</h2>
          <span className="overline"></span>
          <p className="mission-text">
            Meet the passionate leaders and changemakers driving the vision,
            impact, and mission of Nexo Girls forward.
          </p>
        </div>

        <div className="team-container">
          {/* 1. Eunice Adewusi */}
          <div className="team-card">
            <img src="/img/eunice-adewusi.jpg" alt="Eunice Adewusi" />
            <div className="team-details">
              <h3>Eunice Adewusi</h3>
              <h4>Founder & Secretary of the Board</h4>
            </div>
            <div className="team-story">
              <p>
                Eunice Adewusi is a Machine Learning Engineer and Applied AI Researcher focused on building practical AI solutions for Africa. She is also the founder of the Climiradi Roberts Foundation, empowering young people through STEAM education and gender equity initiatives.
              </p>
              <div className="link">
                <a className="social" href="https://linkedin.com/in/euniceadewusic" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* 2. Bosede Akinbolusere */}
          <div className="team-card">
            <img src="/img/Bosede Akinbolusere.jpeg" alt="Bosede Akinbolusere" />
            <div className="team-details">
              <h3>Bosede Akinbolusere</h3>
              <h4>Chair of the Board</h4>
            </div>
            <div className="team-story">
              <p>
                Bosede is a gender economist and executive leader with expertise in gender equality, economic transformation, and sustainable systems change through inclusive leadership and policy reform.
              </p>
              <div className="link">
                <a className="social" href="https://www.linkedin.com/in/bosede-akinbolusere-a6402422/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* 3. Ene Elizabeth Okloho */}
          <div className="team-card">
            <img src="/img/Ene Okloho.JPG" alt="Ene Elizabeth Okloho" />
            <div className="team-details">
              <h3>Ene Elizabeth Okloho</h3>
              <h4>Vice Chair of the Board</h4>
            </div>
            <div className="team-story">
              <p>
                Ene Elizabeth Okloho is an experienced energy sector professional passionate about sustainability, STEM mentorship, and strengthening Africa’s energy systems.
              </p>
              <div className="link">
                <a className="social" href="https://www.linkedin.com/in/ene-elizabeth-okloho-a4054410/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VOLUNTEERS SECTION ================= */}
      <section className="team-section1">
        <div id="ostory">
          <h2>Meet Our volunteers</h2>
          <span className="overline"></span>
          <p className="mission-text">
            Passionate individuals working together to drive impact
            and create positive change in our community.
          </p>
        </div>

        {/* Volunteer Cohort Tabs */}
        <div className="volunteer-tabs">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'v2026' ? 'active' : ''}`}
            onClick={() => setActiveTab('v2026')}
          >
            2026/2027
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'v2025' ? 'active' : ''}`}
            onClick={() => setActiveTab('v2025')}
          >
            2024/2025
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'v2022' ? 'active' : ''}`}
            onClick={() => setActiveTab('v2022')}
          >
            2021/2022
          </button>
        </div>

        {/* Active Cohort Volunteer Cards */}
        <div className="volunteer-group">
          {activeTab === 'v2026' &&
            volunteers2026.map((member, index) => (
              <div className="member-card" key={`v26-${index}`}>
                <img src={member.image} alt={member.name} />
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}

          {activeTab === 'v2025' &&
            volunteers2025.map((member, index) => (
              <div className="member-card" key={`v25-${index}`}>
                <img src={member.image} alt={member.name} />
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}

          {activeTab === 'v2022' &&
            volunteers2022.map((member, index) => (
              <div className="member-card" key={`v22-${index}`}>
                <img src={member.image} alt={member.name} />
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
