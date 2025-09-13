import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

// Navigation bar with logo and links
export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo-link" aria-label="Home">
          <Logo />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
