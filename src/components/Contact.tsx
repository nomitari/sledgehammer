import React, { useState } from "react";
import ContactInfoFooter from "./ContactInfoFooter";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Send email logic
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;
    const mailToLink = `mailto:your-email@example.com?subject=Contact Form Submission&body=${encodeURIComponent(
      emailContent
    )}`;
    // window.location.href = mailToLink;
    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleKeyDown = (e: any) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight + 4}px`;
    e.target.style.maxHeight = "30vh";
  };

  return (
    <section id="contact" className="content">
      {/* <h1 className="big-left-text">let's connect</h1> */}
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name"></label>
            <input
              placeholder="NAME"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              placeholder="EMAIL"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="message"></label>
            <textarea
              onKeyDown={handleKeyDown}
              placeholder="MESSAGE"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">
            <h1 id="lets-connect-button" className="big-left-text">
              let's connect
            </h1>
          </button>
        </div>
      </form>
      <ContactInfoFooter />
    </section>
  );
};

export default Contact;
