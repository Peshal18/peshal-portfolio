import React from "react";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      {/* Simple hexagon with initials */}
      <svg height="50" width="50" viewBox="0 0 100 100">
        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="#0077cc" />
        <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="32" fontFamily="Arial" dy=".3em">P</text>
      </svg>
      <span className="logo-text">Peshal Portfolio</span>
    </div>
  );
}

export default Logo;