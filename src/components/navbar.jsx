'use client';
import Link from 'next/link';
import Image from 'next/image';

import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Viren Pandya Logo"
            width={140}
            height={80}
            priority
            className="logo-img"
          />
        </Link>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
