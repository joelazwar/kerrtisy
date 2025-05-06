import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-info">
        <h1>Contact</h1>
        <p>
          Teryll KerrDouglas
          <br />
          'Kerrtisy'
        </p>
        <p>Mail: contact@kerrtisy.com</p>
        <footer>
          © 2025 by Kerrtisy | Nstalgia Est. 2021.
        </footer>
      </div>

      {/* Right Section */}
      <div className="contact-form">
        <form>
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email *</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject *</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;