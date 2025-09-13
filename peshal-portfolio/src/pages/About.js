import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <img src="/images/me.jpg" alt="Peshal" className="about-img" />
      <p>
        <b>Peshal Sitoula</b>
        <br />
        I am a passionate web developer with a keen interest in creating dynamic and user-friendly web applications. I enjoy learning new technologies and building projects that make a difference!
      </p>
      <a href="/resume.pdf" download className="resume-link">Download My Resume (PDF)</a>
    </div>
  );
}

export default About;