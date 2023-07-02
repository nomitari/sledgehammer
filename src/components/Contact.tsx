import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Get in touch</h2>
      <form action="/submit_contact" method="POST">
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="message">Message:</label>
        <br />
        <textarea id="message" name="message"></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;
