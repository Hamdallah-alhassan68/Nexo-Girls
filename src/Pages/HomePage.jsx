import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const partnerImages = [
  'p2.png', 'p3.jpeg', 'p1.png', 'p4.png', 'p5.avif', 'p6.png', 'p7.png',
  'p8.jpg', 'p9.jpeg', 'p10.jpg', 'p11.png', 'p12.png', 'p13.png', 'p14.jpg',
  'p15.jpg', 'p16.png', 'p17.jpg', 'p18.jpg', 'p20.png'
];

export default function HomePage() {
  const impactRef = useRef(null);
  const [counts, setCounts] = useState({
    empowered: 0,
    advocacy: 0,
    trained: 0,
    countries: 0,
    members: 0
  });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);

          const duration = 2000;
          const startTime = performance.now();
          const targets = {
            empowered: 70000,
            advocacy: 56000,
            trained: 1300,
            countries: 20,
            members: 1940
          };

          const updateCounters = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              empowered: Math.floor(easeOut * targets.empowered),
              advocacy: Math.floor(easeOut * targets.advocacy),
              trained: Math.floor(easeOut * targets.trained),
              countries: Math.floor(easeOut * targets.countries),
              members: Math.floor(easeOut * targets.members)
            });

            if (progress < 1) {
              requestAnimationFrame(updateCounters);
            } else {
              setCounts(targets);
            }
          };

          requestAnimationFrame(updateCounters);
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
    <div className="home-page">
      {/* ================= SLIDER ================= */}
      <div className="slider">
        <div className="slide slide1">
          <div className="overlay">
            <h1>Empowering Young Girls, Transforming Future</h1>
            <p>And creating a more inclusive and equitable world</p>
            <Link className="getinvolve" to="/get-involved">Get Involved</Link>
          </div>
        </div>

        <div className="slide slide2">
          <div className="overlay">
            <h1>Empowering Young Girls, Transforming Future</h1>
            <p>And creating a more inclusive and equitable world</p>
            <Link className="getinvolve" to="/get-involved">Get Involved</Link>
          </div>
        </div>

        <div className="slide slide3">
          <div className="overlay">
            <h1>Empowering Young Girls, Transforming Future</h1>
            <p>And creating a more inclusive and equitable world</p>
            <Link className="getinvolve" to="/get-involved">Get Involved</Link>
          </div>
        </div>

        <div className="slide slide4">
          <div className="overlay">
            <h1>Empowering Young Girls, Transforming Future</h1>
            <p>And creating a more inclusive and equitable world</p>
            <Link className="getinvolve" to="/get-involved">Get Involved</Link>
          </div>
        </div>

        <div className="slide slide5">
          <div className="overlay">
            <h1>Empowering Young Girls, Transform Future</h1>
            <p>And create a more inclusive and equitable world</p>
            <Link className="getinvolve" to="/get-involved">Get Involved</Link>
          </div>
        </div>

        <div className="slide slide6">
          <div className="overlay">
            <h1>Empowering Young Girls, Transforming Future</h1>
            <p>And creating a more inclusive and equitable world</p>
            <Link className="getinvolve" to="/get-involved">Get Involved</Link>
          </div>
        </div>
      </div>

      {/* ================= STORY SECTION ================= */}
      <section className="story-section" id="story">
        <div className="story-grid">
          <div className="story-content">
            <blockquote className="founder-quote">
              Many girls grow up full of potential, yet without access
              to the opportunities, guidance, and support they need
              to thrive.
              <br /><br />
              Nexo Girls was created to change that story.
              <br /><br />
              What began as a simple idea, to create a space where
              girls can learn, connect, and grow, has become a movement
              dedicated to empowering the next generation of female
              leaders.
              <br /><br />
              Through mentorship, education, and a supportive
              community, Nexo Girls helps young women build confidence,
              discover their passions, and step boldly into their
              future.
              <br /><br />
              This is more than a platform, it’s a place where dreams
              are nurtured, voices are heard, and possibilities are
              endless.
            </blockquote>
          </div>

          <div className="video-container">
            <video autoPlay muted loop playsInline>
              <source src="/img/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US (VISION & MISSION) ================= */}
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

      {/* ================= IMPACT SECTION ================= */}
      <section id="impact" ref={impactRef}>
        <div id="ostory">
          <h2 className="title">Our Impact</h2>
          <span className="overline"></span>
        </div>

        <div className="impact-cards">
          <div className="card card3">
            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#274001">
              <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/>
            </svg>
            <h3>{counts.empowered.toLocaleString()}+</h3>
            <p><strong>Girls Empowered Globally</strong></p>
          </div>

          <div className="card card1">
            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#274001">
              <path d="M38-428q-18-36-28-73T0-576q0-112 76-188t188-76q63 0 120 26.5t96 73.5q39-47 96-73.5T696-840q112 0 188 76t76 188q0 38-10 75t-28 73q-11-19-26-34t-35-24q9-23 14-45t5-45q0-78-53-131t-131-53q-81 0-124.5 44.5T480-616q-48-56-91.5-100T264-760q-78 0-131 53T80-576q0 23 5 45t14 45q-20 9-35 24t-26 34ZM0-80v-63q0-44 44.5-70.5T160-240q13 0 25 .5t23 2.5q-14 20-21 43t-7 49v65H0Zm240 0v-65q0-65 66.5-105T480-290q108 0 174 40t66 105v65H240Zm540 0v-65q0-26-6.5-49T754-237q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780ZM480-210q-57 0-102 15t-53 35h311q-9-20-53.5-35T480-210Zm-320-70q-33 0-56.5-23.5T80-360q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-280Zm640 0q-33 0-56.5-23.5T720-360q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-280Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-440q0 50-34.5 85T480-320Zm0-160q-17 0-28.5 11.5T440-440q0 17 11.5 28.5T480-400q17 0 28.5-11.5T520-440q0-17-11.5-28.5T480-480Zm0 40Zm1 280Z"/>
            </svg>
            <h3>{counts.advocacy.toLocaleString()}+</h3>
            <p><strong>Through our global Advocacy Campaigns</strong></p>
          </div>

          <div className="card card4">
            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#274001">
              <path d="M640-80v-90q-56-18-94-64t-44-106h80q8 43 40.5 71.5T700-240h120q25 0 42.5 17.5T880-180v100H640Zm120-200q-33 0-56.5-23.5T680-360q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360q0 33-23.5 56.5T760-280ZM360-400q0-150 105-255t255-105v80q-117 0-198.5 81.5T440-400h-80Zm160 0q0-83 58.5-141.5T720-600v80q-50 0-85 35t-35 85h-80ZM80-520v-100q0-25 17.5-42.5T140-680h120q45 0 77.5-28.5T378-780h80q-6 60-44 106t-94 64v90H80Zm120-200q-33 0-56.5-23.5T120-800q0-33 23.5-56.5T200-880q33 0 56.5 23.5T280-800q0 33-23.5 56.5T200-720Z"/>
            </svg>
            <h3>{counts.trained.toLocaleString()}+</h3>
            <p><strong>Trained through our STEAM bootcamps</strong></p>
          </div>

          <div className="card card2">
            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#274001">
              <path d="M617.5-587.5Q600-605 600-630t17.5-42.5Q635-690 660-690t42.5 17.5Q720-655 720-630t-17.5 42.5Q685-570 660-570t-42.5-17.5Zm-360 0Q240-605 240-630t17.5-42.5Q275-690 300-690t42.5 17.5Q360-655 360-630t-17.5 42.5Q325-570 300-570t-42.5-17.5Zm180 110Q420-495 420-520t17.5-42.5Q455-580 480-580t42.5 17.5Q540-545 540-520t-17.5 42.5Q505-460 480-460t-42.5-17.5Zm0-220Q420-715 420-740t17.5-42.5Q455-800 480-800t42.5 17.5Q540-765 540-740t-17.5 42.5Q505-680 480-680t-42.5-17.5Zm2 534.5q-20.5-3-39.5-8v-143q0-35 23.5-60.5T480-400q33 0 56.5 25.5T560-314v143q-19 5-39.5 8t-40.5 3q-20 0-40.5-3ZM340-192q-20-8-38.5-18T266-232q-28-20-44.5-52T205-352q0-26-5.5-48.5T180-443q-10-13-37.5-39.5T92-532q-11-11-11-28t11-28q11-11 28-11t28 11l153 145q20 18 29.5 42.5T340-350v158Zm280 0v-158q0-26 10-51t29-42l153-145q12-11 28.5-11t27.5 11q11 11 11 28t-11 28q-23 23-50.5 49T780-443q-14 20-19.5 42.5T755-352q0 36-16.5 68.5T693-231q-16 11-34.5 21T620-192Z"/>
            </svg>
            <h3>{counts.countries}+</h3>
            <p><strong>Countries reached across Africa</strong></p>
          </div>

          <div className="card card2">
            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#274001">
              <path d="M617.5-587.5Q600-605 600-630t17.5-42.5Q635-690 660-690t42.5 17.5Q720-655 720-630t-17.5 42.5Q685-570 660-570t-42.5-17.5Zm-360 0Q240-605 240-630t17.5-42.5Q275-690 300-690t42.5 17.5Q360-655 360-630t-17.5 42.5Q325-570 300-570t-42.5-17.5Zm180 110Q420-495 420-520t17.5-42.5Q455-580 480-580t42.5 17.5Q540-545 540-520t-17.5 42.5Q505-460 480-460t-42.5-17.5Zm0-220Q420-715 420-740t17.5-42.5Q455-800 480-800t42.5 17.5Q540-765 540-740t-17.5 42.5Q505-680 480-680t-42.5-17.5Zm2 534.5q-20.5-3-39.5-8v-143q0-35 23.5-60.5T480-400q33 0 56.5 25.5T560-314v143q-19 5-39.5 8t-40.5 3q-20 0-40.5-3ZM340-192q-20-8-38.5-18T266-232q-28-20-44.5-52T205-352q0-26-5.5-48.5T180-443q-10-13-37.5-39.5T92-532q-11-11-11-28t11-28q11-11 28-11t28 11l153 145q20 18 29.5 42.5T340-350v158Zm280 0v-158q0-26 10-51t29-42l153-145q12-11 28.5-11t27.5 11q11 11 11 28t-11 28q-23 23-50.5 49T780-443q-14 20-19.5 42.5T755-352q0 36-16.5 68.5T693-231q-16 11-34.5 21T620-192Z"/>
            </svg>
            <h3>{counts.members.toLocaleString()}</h3>
            <p><strong>Active community members (#nexogirlies)</strong></p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROGRAMS ================= */}
      <div id="ostory">
        <h2>Featured Program</h2>
        <span className="overline"></span>
        <p className="mission-text">
          Our featured programs are designed to empower girls through education, 
          mentorship, leadership, and digital skills, helping them build confidence 
          and create meaningful impact in their communities.
        </p>
      </div>

      <section className="featured" id="featured">
        <div className="service-list">
          <div className="service">
            <img src="/img/upskilss.jpg" alt="Upskill" />
            <h3>Upskill</h3>
            <p>
              Digital skills training program designed to equip young women with basics of 8 career-ready skills in tech, leadership, and entrepreneurship, in 8 days. This program empowers girls to gain practical skills.
            </p>
            <Link className="donate2" to="/programs">Learn more</Link>
          </div>

          <div className="service">
            <img src="/img/techer.jpg" alt="Tech4Her" />
            <h3>Tech4Her</h3>
            <p>
              An initiative that equips young women with essential digital skills, technology awareness, and online safety knowledge to build confidence and thrive in the digital world. This includes workshops and mentorship.
            </p>
            <Link className="donate2" to="/programs">Learn more</Link>
          </div>

          <div className="service">
            <img src="/img/slide1.jpg" alt="PropelHer" />
            <h3>PropelHer</h3>
            <p>
              An initiative that connects young women with experienced professionals who provide career guidance, personal development support, and mentorship to help them achieve their goals.
            </p>
            <Link className="donate2" to="/programs">Learn more</Link>
          </div>

          <div className="service">
            <img src="/img/robort.jpg" alt="Girls Hack for Impact" />
            <h3>Girls Hack for Impact</h3>
            <p>
              An initiative that empowers young women to use technology to solve community challenges, build innovative solutions, gain practical skills, and receive mentorship throughout the program.
            </p>
            <Link className="donate2" to="/programs">Learn more</Link>
          </div>
        </div>

        <Link className="btn btn-primary1" to="/programs">View more here</Link>
      </section>

      {/* ================= PARTNERS CAROUSEL ================= */}
      <section className="partners" id="Partners">
        <div id="ostory">
          <h2 className="title">Partners</h2>
          <span className="overline"></span>
        </div>

        <div className="partners-track">
          {/* First set */}
          {partnerImages.map((src, idx) => (
            <div className="parts" key={`p1-${idx}`}>
              <img src={`/img/${src}`} alt="Partner logo" />
            </div>
          ))}
          {/* Duplicate set for infinite scroll */}
          {partnerImages.map((src, idx) => (
            <div className="parts" key={`p2-${idx}`}>
              <img src={`/img/${src}`} alt="Partner logo" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <div id="ostory">
        <h2>Testimonial</h2>
        <span className="overline"></span>
        <p className="mission-text">
          Hear from the girls and mentors who have experienced growth,
          transformation, and impact through our programs.
        </p>
      </div>

      <section className="testimonials-section">
        <div className="testimonial">
          <div className="text">
            <p>
              Being sponsored by Nexo Girls to attend the 2024 She Code Africa Summit was a turning point for me. The experience refueled my confidence, giving me the motivation to actively bring my skills and ideas to life. I highly recommend joining the Nexo Girls Metaverse for every Girlie.
            </p>
            <div className="display">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#314D1C">
                  <path d="M240-440v-80h480v80H240Z"/>
                </svg>
                Peace Roberts
              </h3>
            </div>
          </div>

          <div className="text">
            <p>
              Through the upskill program, I gained valuable skills in web development, freelancing, and content writing. It strengthened my passion for technology, boosted my confidence, and showed me how to turn my skills into meaningful opportunities for personal and professional growth.
            </p>
            <div className="display">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#314D1C">
                  <path d="M240-440v-80h480v80H240Z"/>
                </svg>
                Deborah Russell
              </h3>
            </div>
          </div>

          <div className="text">
            <p>
              The Upskill program introduced me to freelancing, web development, and LinkedIn optimization. It strengthened my professional skills, boosted my confidence, and helped me build a solid foundation for long-term growth and success in the digital workspace.
            </p>
            <div className="display">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#314D1C">
                  <path d="M240-440v-80h480v80H240Z"/>
                </svg>
                Akaakase Grace Msendoo
              </h3>
            </div>
          </div>
        </div>
      </section>

        {/* Optional pre-footer CTA section */}
    
        <div className="footer1">
          <div className="overlay">
            <div className="text1">
              <h2 id="ready-to-rise">Ready to Rise, Lead, and Make an Impact?</h2>
              <p>
                Take the first step toward empowerment, growth, and opportunity with Nexo Girls
              </p>
              <Link className="btn btn-primary" to="/get-involved">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      )
    </div>
  );
}
