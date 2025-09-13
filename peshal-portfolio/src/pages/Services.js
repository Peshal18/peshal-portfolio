import React from 'react';

const services = [
  'Web development (React, HTML/CSS, JavaScript)',
  'Programming help & tutoring',
  'Small frontend projects',
];

export default function Services() {
  return (
    <div>
      <h1>Services</h1>
      <ul className="services-list">
        {services.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}
