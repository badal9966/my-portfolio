import React from "react";
import "./styles/Projects.css";

function Projects() {
  return (
    <>
      <section className="projects-section fade-in">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {/* Social Media Dashboard */}
          <div className="project-card">
            <div className="project-image">
              <img src="/images/social-dashboard.jpg" alt="Social Media Dashboard" />
            </div>
            <div className="project-content">
              <h3>Social Media Dashboard</h3>
              <p>A comprehensive social media management platform with analytics, scheduling, and content management features. Built with the MERN stack and real-time updates.</p>
              <div className="project-tags">
                <span>React.js</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Socket.io</span>
              </div>
              <div className="project-links">
                <a href="https://social-dashboard-demo.netlify.app" target="_blank" rel="noopener noreferrer" className="btn primary">Live Demo</a>
                <a href="https://github.com/saurabhsharma/social-dashboard" target="_blank" rel="noopener noreferrer" className="btn secondary">Source Code</a>
              </div>
            </div>
          </div>

          {/* Online Learning Platform */}
          <div className="project-card">
            <div className="project-image">
              <img src="/images/learning-platform.jpg" alt="Online Learning Platform" />
            </div>
            <div className="project-content">
              <h3>Online Learning Platform</h3>
              <p>An interactive e-learning platform with video courses, quizzes, and progress tracking. Features include live sessions and student-teacher interaction.</p>
              <div className="project-tags">
                <span>Next.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>WebRTC</span>
              </div>
              <div className="project-links">
                <a href="https://elearn-platform.herokuapp.com" target="_blank" rel="noopener noreferrer" className="btn primary">Live Demo</a>
                <a href="https://github.com/saurabhsharma/elearn-platform" target="_blank" rel="noopener noreferrer" className="btn secondary">Source Code</a>
              </div>
            </div>
          </div>

          {/* Restaurant Management System */}
          <div className="project-card">
            <div className="project-image">
              <img src="/images/restaurant-system.jpg" alt="Restaurant Management System" />
            </div>
            <div className="project-content">
              <h3>Restaurant Management System</h3>
              <p>A complete restaurant management solution with order processing, inventory management, and POS system. Includes real-time order tracking and analytics.</p>
              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MySQL</span>
                <span>Redux</span>
              </div>
              <div className="project-links">
                <a href="https://restaurant-ms.netlify.app" target="_blank" rel="noopener noreferrer" className="btn primary">Live Demo</a>
                <a href="https://github.com/saurabhsharma/restaurant-ms" target="_blank" rel="noopener noreferrer" className="btn secondary">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects; 