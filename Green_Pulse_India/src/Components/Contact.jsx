// Contact.jsx
import React from 'react';
import './Contact.css';
import bg from '../assets/contact.jpg';

const Contact = () => {
  return (
    <div className="contact-page" style={{ backgroundImage: `url(${bg})` }}>
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out for collaborations, questions, or volunteering opportunities.</p>
      </header>

      <div className="contact-container">
        <form className="contact-form">
          <h2>Send a Message</h2>
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />

          <label>Email</label>
          <input type="email" placeholder="Your Email" required />

          <label>Message</label>
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send</button>
        </form>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> contact@greenpulseindia.org</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Location:</strong> Pune, Maharashtra, India</p>

          {/* Optional map/image */}
          {/* <img src="path-to-map-or-contact-img.jpg" alt="Our location" className="contact-image" /> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
