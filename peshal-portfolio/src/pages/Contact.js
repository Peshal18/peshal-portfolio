import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleFormSubmit() {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p><b>Email:</b> peshal@example.com</p>
        <p><b>Phone:</b> +1 (123) 456-7890</p>
        <p><b>Location:</b> Toronto, Canada</p>
      </div>
      <h3>Send me a message</h3>
      {submitted ? (
        <div className="thankyou-msg">Thank you for your message!</div>
      ) : (
        <ContactForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default Contact;