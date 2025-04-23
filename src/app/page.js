'use client';
import './page.css';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function HomePage() {
  return (
    <>
    {/* Background Animation */}
    <div className="background-overlay"></div>
    <main className="single-page">
      {/* HERO / INTRO */}
      <section className="hero" id="home">
        <h1>Hi, I am <span className="highlight">Viren Pandya</span></h1>
        <p className="tagline">Aspiring Web Developer | Cinephile | Anime & Comic Fan</p>
        <p className="intro">
          Currently studying Computer Programming at Conestoga College, I enjoy crafting clean, responsive websites and full-stack apps using technologies like React, Node.js, and MongoDB.
          I am passionate about building digital experiences that are not only functional but also inspired by the art of cinema and storytelling.
        </p>
        <div className="social-icons">
          <a href="https://github.com/VIRENPANDYA" target="_blank"><FaGithub size={40} /></a>
          <a href="https://www.linkedin.com/in/viren-pandya/" target="_blank"><FaLinkedin size={40} /></a>
        </div>
        {/* Skills Section */}
          <div className="skills-section">
            <h2>Skills</h2>
            <ul className="skills-list">
              <li>HTML, CSS, JavaScript, React, C#</li>
              <li>Node.js, Express.js, MongoDB, SQL</li>
              <li>GitHub, Visul Studio and Code, Postman</li>
            </ul>
          </div>
      </section>
      
      {/* ABOUT */}
      <section className="about-section" id="about">
        <h2>About Me</h2>
        <p>
          I am <strong>Viren Pandya</strong>, currently pursuing a Diploma in <strong>Computer Programming at Conestoga College</strong>, and previously graduated in IT from Gujarat, India.
        </p>
        <p>
        I am committed to continuous learning and applying my knowledge to develop efficient and scalable web applications. My goal is to contribute to innovative projects and collaborate with professionals in the tech industry.
        </p>

        <div className="timeline">
          <h3>📘 Timeline</h3>
          <ul>
            <li><span>2018 to 2021:</span> IT Diploma, Polytechnic Gandhinagar</li>
            <li><span>2023 to 2025:</span> Computer Programming, Conestoga College</li>
            <li><span>2024:</span> Solo Game Project: Tank Battle Royal</li>
            <li><span>2025 Present:</span> Building Capstone Project: Forkify</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {[
            {
              title: 'Forkify Restaurant App',
              desc: 'Full-stack app with dynamic reservations, menus & admin dashboard.',
              tech: ['React','JavaScript' ,'MongoDB', 'CSS', 'HTML'],
              link: 'https://github.com/VIRENPANDYA/forkify'
            },
            {
              title: 'Inventory Mangement App',
              desc: 'A Web-app with all the CRUD operation with Neon.tech database for handling inventory.',
              tech: ['TypeScript','JavaScript' ,'Neon.Tech', 'CSS', 'Ledger Report'],
              link: 'https://github.com/VIRENPANDYA/inventory-manager.git'
            },
            {
              title: 'Figurines Shop Web-App',
              desc: 'A webapp made for monitoring sales of Figurines products.',
              tech: ['JavaScript' ,'MongoDB', 'CSS', 'EJS'],
              link: 'https://github.com/VIRENPANDYA/figurines-shop.git'
            },
            {
              title: 'Space Shooter Game',
              desc: 'This site! Made with C#, Data Structure and MonoGame.',
              tech: ['C#', 'Visual Studio','MonoGame'],
              link: 'https://github.com/computer-com/Group7.git'
            },
            {
              title: 'Tank Battle Royal',
              desc: 'MonoGame-based solo game built with C# and Visual Studio.',
              tech: ['C#', 'MonoGame', 'Visual Studio'],
              link: 'https://github.com/VIRENPANDYA/GameDeveopmentProject.git'
            },
          ].map((proj, i) => (
            <div className="project-card" key={i}>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <div className="tech-tags">{proj.tech.map((t, idx) => <span key={idx}>{t}</span>)}</div>
              <a href={proj.link} target="_blank"><FaGithub /> GitHub</a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <h2>Let&apos;s Connect!</h2>
        <div className="contact-grid">
          <div className="left-images">
              <Image src="/sketchone.jpg" alt="Sketch 1" width={250} height={350} />
              <Image src="/sketchtwo.jpg" alt="Sketch 2" width={250} height={350} />
          </div>

          <div className="contact-card">
            <h3>Contact Me</h3>
            <p>I am open to collaboration and opportunities in web development. Feel free to reach out!</p>
            <div className="contact-buttons">
              <a href="mailto:virenpandya1975@gmail.com" className="contact-btn"><FaEnvelope /> Email</a>
              <a href="https://github.com/VIRENPANDYA" target="_blank" className="contact-btn"><FaGithub /> GitHub</a>
              <a href="https://www.linkedin.com/in/viren-pandya/" target="_blank" className="contact-btn"><FaLinkedin /> LinkedIn</a>
            </div>
          </div>

          <div className="right-images">
            <Image src="/ghiblione.jpg" alt="Ghibli Toronto" width={250} height={350} />
            <Image src="/ghiblitwo.jpg" alt="Ghibli Niagara" width={250} height={350} />
          </div>
        </div>
      </section>
      
    </main>
    </>
  );
}
