import React from "react";
import "./Projects.css";

const projects = [
  {
    img: "/images/project1.jpg",
    title: "Weather App",
    desc: "A real-time weather dashboard using React and OpenWeather API.",
    role: "Lead Developer",
    outcome: "Deployed app that helps users check weather worldwide.",
  },
  {
    img: "/images/project2.jpg",
    title: "Task Manager",
    desc: "A task management tool with user authentication and CRUD features.",
    role: "Frontend Developer",
    outcome: "Improved productivity for small teams.",
  },
  {
    img: "/images/project3.jpg",
    title: "Portfolio Website",
    desc: "Personal portfolio built with React, showcasing my skills and projects.",
    role: "Full Stack Developer",
    outcome: "Increased visibility to potential employers.",
  },
];

function Projects() {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <p><b>Role:</b> {p.role}</p>
            <p><b>Outcome:</b> {p.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;