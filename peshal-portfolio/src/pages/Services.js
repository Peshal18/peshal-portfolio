import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <h2>Services I Offer</h2>
      <div className="services-list">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Building modern, responsive websites and web apps.</p>
        </div>
        <div className="service-card">
          <h3>Mobile Apps</h3>
          <p>Cross-platform mobile app development using React Native.</p>
        </div>
        <div className="service-card">
          <h3>Consulting</h3>
          <p>Tech consulting and project planning services.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;