'use client';
import './projects.css';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Forkify Restaurant App",
    description: "A full-stack capstone project for restaurant management with dynamic menus, reservations, admin dashboards, and PDF receipts. Built using React, Node.js, and MongoDB.",
    tech: ["React", "Express", "MongoDB", "Nodemailer", "Bootstrap"],
    github: "https://github.com/VIRENPANDYA/forkify",
  },
  {
    title: "Personal Portfolio",
    description: "This very website you're on now! Built to reflect my developer journey using modern 2025 best practices with Next.js and CSS.",
    tech: ["Next.js", "CSS", "React Icons"],
    github: "https://github.com/VIRENPANDYA",
  },
  {
    title: "Tank Battle Royal",
    description: "A solo project made to learn about data structures and MonoGame template, A Fun and friendly video game to pass your time and enjoy!",
    tech: ["Visual Studio", "MonoGame", "C#", "Data Structure"],
    github: "https://github.com/VIRENPANDYA/GameDeveopmentProject", 
  },
];

export default function ProjectsPage() {
  return (
    <section className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <div className="tech-tags">
              {proj.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <a href={proj.github} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
