import React from 'react';

// Small SVG logo using your initials "PS" (change letters if you want)
export default function Logo() {
  return (
    <svg width="48" height="48" viewBox="0 0 100 100" aria-label="Logo">
      <rect width="100" height="100" rx="16" fill="#2E86AB" />
      <text x="50" y="60" fontSize="38" fontFamily="sans-serif" textAnchor="middle" fill="#fff">PS</text>
    </svg>
  );
}
