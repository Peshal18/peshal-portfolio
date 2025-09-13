import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Contact form captures the data into localStorage and then redirects to Home
export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', message: '' });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Save to localStorage as a simple capture method (no server required)
    const stored = JSON.parse(localStorage.getItem('messages') || '[]');
    stored.push({ ...form, date: new Date().toISOString() });
    localStorage.setItem('messages', JSON.stringify(stored));
    // Redirect to Home page after capture
    navigate('/');
  }

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>First Name
          <input name="firstName" value={form.firstName} onChange={handleChange} required />
        </label>
        <label>Last Name
          <input name="lastName" value={form.lastName} onChange={handleChange} required />
        </label>
        <label>Contact Number
          <input name="phone" value={form.phone} onChange={handleChange} />
        </label>
        <label>Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>Message
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
