import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm({ onSubmit }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
    setForm({
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
      message: "",
    });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        name="firstName"
        type="text"
        placeholder="First Name"
        value={form.firstName}
        onChange={handleChange}
        required
      />
      <input
        name="lastName"
        type="text"
        placeholder="Last Name"
        value={form.lastName}
        onChange={handleChange}
        required
      />
      <input
        name="contactNumber"
        type="text"
        placeholder="Contact Number"
        value={form.contactNumber}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Type your message..."
        value={form.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;