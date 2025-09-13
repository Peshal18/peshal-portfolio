import React from 'react';

const educ = [
  { year: '2025', degree: 'Diploma in Software Engineering Technician', institution: 'Your College Name' },
];

export default function Education() {
  return (
    <div>
      <h1>Education</h1>
      <table className="education-table">
        <thead><tr><th>Year</th><th>Degree</th><th>Institution</th></tr></thead>
        <tbody>
          {educ.map((e, i) => (
            <tr key={i}><td>{e.year}</td><td>{e.degree}</td><td>{e.institution}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
