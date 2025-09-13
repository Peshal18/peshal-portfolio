import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About Me</Link>
        </li>
        <li className={location.pathname === "/projects" ? "active" : ""}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={location.pathname === "/education" ? "active" : ""}>
          <Link to="/education">Education</Link>
        </li>
        <li className={location.pathname === "/services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;