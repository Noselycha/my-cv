// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src="./images/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:examplemail@gmail.com">
              noselychasoriton04@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="./images/instagram.png"
            alt="Instagram icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.instagram.com/">jm.liks</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="./images/whatsapp.png"
            alt="Whatsapp icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://web.whatsapp.com/">lika soriton</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
