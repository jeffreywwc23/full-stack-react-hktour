import React from "react";
import "./ContactUs.css";

export const ContactUs = () => {
  return (
    <section className="contact-us-container">
      <div className="contact-us-wrapper">
        <div className="contact-us-box">
          <div className="left"></div>
          <div className="right">
            <h2>Contact Us</h2>
            <input type="text" className="field" placeholder="Your Name" />
            <input type="email" className="field" placeholder="Your Email" />
            <input type="text" className="field" placeholder="Your Phone" />
            <textarea className="field" placeholder="Message"></textarea>
            <div className="btn-container">
              <button className="contact-us-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
