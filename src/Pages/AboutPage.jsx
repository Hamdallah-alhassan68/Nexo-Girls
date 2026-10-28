import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const awardImages = [
  'Award.jpg',
  'slide1.jpg',
  '2025 NGO Day - Hexa Media Africa.jpg',
  'Nexo Girls - STAND.png',
  'Suas Educational Development TA STAND is a registered charity, CHY No. 14931..png'
];

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* ================= HERO ================= */}
      <div className="hero">
        <div className="overlay">
          <h1>Empowering Girls to Lead, Innovate, and Thrive</h1>
          <p>
            Creating opportunities for young women through education,
            digital skills, mentorship, and leadership development.
          </p>
          <Link className="btn" to="/get-involved">Get Involved</Link>
        </div>
      </div>

      {/* ================= ABOUT NEXO GIRLS ================= */}
      <div id="ostory">
        <h2>About Nexo Girls</h2>
        <span className="overline"></span>
        <p className="mission-text">
          Nexo Girls is a youth-led initiative under the Climiradi Roberts Foundation, a registered nonprofit in Nigeria, that promotes young women's participation in STEAM (Science, Technology, Engineering, Arts, and Mathematics) by equipping them with globally in-demand skills to bridge the gender gap, alleviate poverty, and challenge harmful stereotypes.
          <br /><br />
          Through <strong>four programmatic core sectors</strong>— STEAM education, mentorship & leadership, social advocacy, and economic opportunities — we work to transform gendered barriers into ladders of opportunity. We believe in the power of technology and education to transform lives, ensuring a future where every girl thrives.
          <br /><br />
          Within 3 years of operations, we have impacted over <strong>70,000</strong> youths across Africa and beyond through digital skills programs, storytelling labs, mentorship, and strategic partnerships. While we operate in Nigeria, Rwanda & Kenya, our programs and online platforms continue to engage girls from other regions, expanding our reach through school tours, training sessions, global awareness campaigns, etc.
        </p>
      </div>

      {/* ================= PROBLEMS WE ADDRESS ================= */}
      <section className="problems-section">
        <div id="ostory">
          <h2>The Problems We Address</h2>
          <span className="overline"></span>
          <p className="mission-text">
            Nexo Girls is committed to addressing critical challenges
            affecting girls and young women across Africa through education,
            mentorship, innovation, and opportunity.
          </p>
        </div>

        <div className="problems-container">
          <div className="problem-card">
            <img src="/img/nopoverty.png" alt="Socioeconomic Challenges" />
            <div className="problem-content">
              <h3>Socioeconomic Challenges</h3>
              <p>
                Poverty and economic limitations reduce opportunities
                for girls to grow, learn, and build sustainable futures.
              </p>
            </div>
          </div>

          <div className="problem-card">
            <img src="/img/qualityeducation.png" alt="Education Gaps" />
            <div className="problem-content">
              <h3>Education Gaps</h3>
              <p>
                Unequal access to quality education continues to prevent
                many girls from reaching their academic and career goals.
              </p>
            </div>
          </div>

          <div className="problem-card">
            <img src="/img/genderequality.gif" alt="Gender Inequality" />
            <div className="problem-content">
              <h3>Gender Inequality in STE(A)M</h3>
              <p>
                Many girls still face barriers in accessing opportunities
                and representation in science, technology, engineering,
                arts, and mathematics fields.
              </p>
            </div>
          </div>

          <div className="problem-card">
            <img src="/img/SD17.png" alt="Partnerships" />
            <div className="problem-content">
              <h3>Partnering With Other Organization to Achieve Our Goal</h3>
              <p>
                Young women across Africa often lack access to digital
                education, technology tools, and practical tech training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEET OUR TEAM (BOARD) ================= */}
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
          {/* Card 1 */}
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

          {/* Card 2 */}
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

          {/* Card 3 */}
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

      {/* ================= WHY NEXO GIRLS? ================= */}
      <div id="ostory">
        <h2>Why Nexo Girls?</h2>
        <span className="overline"></span>
        <p className="mission-text">
          At Nexo Girls, we believe every girl deserves the opportunity to dream, grow, and lead with confidence. 
          We are committed to creating a supportive space where young girls are empowered through education, mentorship, 
          technology, and leadership opportunities that help them unlock their full potential and create lasting impact 
          in their communities.
        </p>
      </div>

      <section className="Aboutus" id="Aboutus">
        <div className="Aboutus-container">
          <div className="box box1">
            <img src="/img/slide2.jpg" alt="Our Vision" />
            <h2>Our Vision</h2>
            <p>
              We envision a world where every girl has access to education, digital literacy, and opportunities, enabling her to drive positive change and create a more inclusive and equitable society.
            </p>
          </div>

          <div className="box box2">
            <img src="/img/slide7.PNG" alt="Our Mission" />
            <h2>Our Mission</h2>
            <p>
              To empower young girls to unlock their full potential and become catalysts for change through comprehensive education, digital literacy programs, and strategic partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE PROGRAMMATIC SECTORS ================= */}
      <div id="ostory">
        <h2>Our Core Programmatic Sectors'</h2>
        <span className="overline"></span>
      </div>

      <section className="testimonials-section">
        <div className="testimonial">
          <div className="text">
            <h3>STEAM Education</h3>
            <p>
              Promoting young women's participation and equipping them with globally in-demand skills in Science, Technology, Engineering, Arts, and Mathematics.
            </p>
          </div>

          <div className="text">
            <h3>Mentorship & Leadership</h3>
            <p>
              Fostering a generation of confident, empowered female leaders through peer-to-peer support, our "Big Sister Circle" and professional guidance.
            </p>
          </div>

          <div className="text">
            <h3>Social Advocacy</h3>
            <p>
              Running global social impact campaigns to challenge harmful stereotypes and combat issues like gender-based violence. We actively focus on the intersection of technology and safety, leveraging digital platforms for empowerment.
            </p>
          </div>

          <div className="text">
            <h3>Economic Opportunities</h3>
            <p>
              Providing entrepreneurship support, skills training, and scholarships to help alleviate poverty and create financial independence.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUE ================= */}
      <div id="ostory">
        <h2>Our Core Value</h2>
        <span className="overline"></span>
        <p className="mission-text">What binds Nexo Girls</p>
      </div>

      <section className="story-section">
        <div className="story-grid">
          <div className="video-container">
            <img src="/img/indian.jpg" alt="Nexo Girls Core Values" />
          </div>

          <div className="story-content">
            <div className="values">
              <div className="core">
                <strong>Empowerment</strong>
                <p>
                  We believe girls should not just be passive consumers of technology. We equip them with the STEAM and digital skills to reach their full potential and become active creators of their own economic liberation and climate resilience.
                </p>
              </div>

              <div className="core">
                <strong>Inclusion & Safety</strong>
                <p>
                  We recognize that safety is a prerequisite for learning. We create secure, inclusive spaces, both online and offline, where every girl can learn fearlessly, free from gender-based violence and harmful stereotypes.
                </p>
              </div>

              <div className="core">
                <strong>Community & Leadership</strong>
                <p>
                  We nurture bold changemakers through a pan-African sisterhood and a "girls teach girls" model. We believe in the power of peer mentorship, where our beneficiaries return to lead, train, and guide the next generation.
                </p>
              </div>

              <div className="core">
                <strong>Innovation</strong>
                <p>
                  We encourage forward-thinking digital skills by ensuring every tech and climate solution we build is not just theoretical but rooted in the lived experiences, stories, and direct needs of our local communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AWARDS & RECOGNITION ================= */}
      <section className="Partners">
        <div id="ostory">
          <h2 className="Award">Award & Recognition</h2>
          <span className="overline"></span>
        </div>

        <div className="partners-track">
          {awardImages.map((src, idx) => (
            <div className="parts" key={`aw1-${idx}`}>
              <img src={`/img/${src}`} alt="Award Recognition" />
            </div>
          ))}
          {awardImages.map((src, idx) => (
            <div className="parts" key={`aw2-${idx}`}>
              <img src={`/img/${src}`} alt="Award Recognition" />
            </div>
          ))}
        </div>

        <a
          className="getinvolve"
          href="https://drive.google.com/file/d/18QyU3zIxZne1oY2RP1CHoJ0DKHgvEjU9/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          View more here
        </a>
      </section>
    </div>
  );
}
