import React from 'react';

// About page: replace the paragraph text with your real short bio
export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src="/images/me.jpg" alt="Headshot" className="headshot" />
      <p>
        My name is Peshal Sitoula. I am a diploma student in Software Engineering Technician.
        I enjoy coding and building small projects that solve problems.
      </p>
      <a href="/resume.pdf" download>Download my Resume (PDF)</a>
    </div>
  );
}
