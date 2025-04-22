'use client';
import './contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <section className="contact-container">
      <h1>Contact Me</h1>
      <p>I’d love to collaborate or just chat. Reach out through any of the platforms below:</p>

      <div className="contact-links">
        <a href="mailto:virenpandya1975@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope /> Email
        </a>
        <a href="https://github.com/VIRENPANDYA" target="_blank" rel="noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/viren-pandya/" target="_blank" rel="noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}
