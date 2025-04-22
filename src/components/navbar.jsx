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
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
