import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Peshal's Portfolio</h1>
      <p>
        Mission: To craft clean, efficient, and impactful web applications that solve real-world problems.
      </p>
      <div className="home-links">
        <Link to="/about" className="home-link-btn">About Me</Link>
        <Link to="/projects" className="home-link-btn">My Projects</Link>
        <Link to="/contact" className="home-link-btn">Contact Me</Link>
      </div>
    </div>
  );
}

export default Home;