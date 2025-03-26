import "./styles/global.css";
import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

function Home() {
  return (
    <main className="home-page">
      <section className="hero fade-in">
        <div className="hero-content">
          <h1>Hi, I'm Badal Sahu</h1>
          <p>Full Stack Developer | MERN Stack Expert | UI/UX Designer</p>
          <div className="hero-description">
            <p>I am a passionate web developer specializing in creating modern and efficient web applications. With expertise in the MERN stack (MongoDB, Express.js, React, Node.js), I build scalable and user-friendly digital solutions that solve real-world problems.</p>
          </div>
          <div className="cta-buttons">
            <Link to="/projects" className="btn secondary">View My Work</Link>
            <Link to="/contact" className="btn secondary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
