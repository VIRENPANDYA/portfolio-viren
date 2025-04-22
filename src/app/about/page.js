'use client';
import './about.css';

export default function AboutPage() {
  return (
    <section className="about-container">
      <h1>About Me</h1>

      <div className="about-section">
        <p>
          I'm <strong>Viren Pandya</strong>, a web developer passionate about building visually appealing and functionally sound applications.
          I’m currently pursuing a Diploma in <strong>Computer Programming at Conestoga College, Canada</strong>, and hold a prior diploma in <strong>Information Technology from Government Polytechnic, India</strong>.
        </p>

        <p>
          My development style draws inspiration from cinema, comics, and anime — I believe tech can tell a story too. Whether it’s a clean React UI or a backend API in Node, I aim for creativity and performance.
        </p>

        <p>
          When I’m not coding, you’ll likely find me watching movies, sketching characters, or gaming. I'm currently learning Japanese too — just for the love of anime and culture.
        </p>
      </div>

      <div className="timeline">
        <h2>📘 Timeline</h2>
        <ul>
          <li><span>2023–2025</span> Diploma in Computer Programming – Conestoga College, Canada</li>
          <li><span>2018–2021</span> Diploma in Information Technology – Polytechnic Gandhinagar, India</li>
          <li><span>2023–Present</span> Building Full-stack Projects & Capstone (Forkify)</li>
          <li><span>2024</span> Worked on “Tank Battle Royal” Game as solo side project</li>
        </ul>
      </div>
    </section>
  );
}
