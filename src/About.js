// import "./global.css";
import "./styles/About.css";
import React, { useState } from "react";

function About() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <section className="about-section fade-in">
        <div className="about-content">
          <h1>About Me</h1>
          <div className="profile">
            {!imageError ? (
              <div className="profile-image-container">
                <img
                  src="/images/profile.jpg"
                  alt="Badal Sahu"
                  className="profile-image"
                  onError={handleImageError}
                />
              </div>
            ) : (
              <div className="profile-image-container profile-fallback">
                <i className="fas fa-user"></i>
                <span>BS</span>
              </div>
            )}
            <div className="bio">
              <p>Hello! I'm Badal Sahu, a Full Stack Developer with a passion for creating innovative web solutions. I specialize in the MERN stack and have a keen eye for design, allowing me to create both functional and visually appealing applications.</p>
              <p>I have a strong foundation in computer science and continuously stay updated with the latest web technologies and best practices. My goal is to build applications that not only meet technical requirements but also provide an excellent user experience.</p>
            </div>
          </div>

          <h2>Experience</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <h3>Full Stack Developer</h3>
              <p className="company">WebTech Solutions</p>
              <p className="duration">2022 - Present</p>
              <ul>
                <li>Developed and maintained multiple MERN stack applications</li>
                <li>Implemented responsive and accessible web designs</li>
                <li>Optimized application performance and user experience</li>
              </ul>
            </div>
            <div className="experience-card">
              <h3>Frontend Developer</h3>
              <p className="company">Digital Innovations</p>
              <p className="duration">2021 - 2022</p>
              <ul>
                <li>Built interactive user interfaces using React.js</li>
                <li>Collaborated with UI/UX designers for optimal user experience</li>
                <li>Integrated RESTful APIs and managed state with Redux</li>
              </ul>
            </div>
          </div>

          <h2>Technical Skills</h2>
          <div className="skill-grid">
            <div className="skill-card">
              <i className="fab fa-react"></i>
              <h3>Frontend</h3>
              <p>React.js, Redux, Next.js</p>
            </div>
            <div className="skill-card">
              <i className="fab fa-node-js"></i>
              <h3>Backend</h3>
              <p>Node.js, Express.js</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-database"></i>
              <h3>Database</h3>
              <p>MongoDB, MySQL</p>
            </div>
            <div className="skill-card">
              <i className="fab fa-js"></i>
              <h3>Languages</h3>
              <p>JavaScript, TypeScript</p>
            </div>
            <div className="skill-card">
              <i className="fas fa-tools"></i>
              <h3>Tools</h3>
              <p>Git, Docker, AWS</p>
            </div>
          </div>

          <h2>Education</h2>
          <div className="education-card">
            <h3>Bachelor of Science in Computer Science</h3>
            <p className="school">DAV Autonomous College, Titilagarh, Odisha</p>
            <p className="duration">2021 - 2024</p>
            <p>Core subjects: Data Structures, Algorithms, Web Development, Database Management, Software Engineering, Artificial Intelligence</p>
          </div>
          <div className="education-card">
            <h3>Master of Computer Application</h3>
            <p className="school">Kalinga University, Raipur, Chhattisgarh</p>
            <p className="duration">2024 - Current</p>
            <p>Core subjects: Data Structures, Algorithms, Web Development, Database Management, Software Engineering, Management, ReactJs</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
