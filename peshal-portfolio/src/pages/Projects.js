import React from 'react';

const projects = [
  { id: 1, title: 'Project One', img: '/images/project1.png', desc: 'Role: Developer. Built a simple app that does X.' },
  { id: 2, title: 'Project Two', img: '/images/project2.png', desc: 'Role: Designer & Dev. Built UI for feature Y.' },
  { id: 3, title: 'Project Three', img: '/images/project3.png', desc: 'Role: Team lead. Improved performance by Z%.' },
];

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.id} className="project-card">
            <img src={p.img} alt={p.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
