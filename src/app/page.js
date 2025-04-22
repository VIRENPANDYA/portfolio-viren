'use client';
import './page.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HomePage() {
  return (
    <section className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Hi, I'm <span className="highlight">Viren Pandya</span></h1>
        <p className="tagline">Aspiring Web Developer | Cinephile | Anime & Comic Fan</p>
        <p className="intro">
          Currently studying Computer Programming at Conestoga College, I enjoy crafting clean, responsive websites and full-stack apps using technologies like React, Node.js, and MongoDB.
          I'm passionate about building digital experiences that are not only functional but also inspired by the art of cinema and storytelling.
        </p>
        <div className="social-icons">
          <a href="https://github.com/VIRENPANDYA" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/viren-pandya/" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>HTML, CSS, JavaScript, React</li>
          <li>Node.js, Express.js, MongoDB, SQL</li>
          <li>Git, GitHub, VS Code, Postman</li>
          <li>Responsive Design, Flexbox, Grid</li>
        </ul>
      </div>

      {/* Fun Interests */}
      <div className="interests-banner">
        <p>🎬 Movie Buff • 📖 ComicBook Fan • 🎮 Casual Gamer</p>
      </div>
    </section>
  );
}
