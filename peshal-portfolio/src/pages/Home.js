import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my portfolio</h1>
      <p className="lead">Mission: Build clean, useful web apps and learn every day.</p>
      <Link to="/about" className="btn">About me</Link>
    </div>
  );
}
