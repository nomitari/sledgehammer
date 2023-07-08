import React from "react";

const Menu: React.FC = () => {
  return (
    <section id="menu">
      <ul>
        <li className="nav-item">
          <a href="#services">SERVICES</a>
        </li>
        <li className="nav-item">
          <a href="#about">ABOUT</a>
        </li>
        <li className="nav-item">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      <div id="menu-footer">
        <div className="menu-footer-section">
          <p>ADDRESS:</p>
          <p>123 Whatever St</p>
          <p>Bigville, CO USA</p>
        </div>
        <div className="menu-footer-section">
          <p>WORK WITH US:</p>
          <p>hello@bloomdi.com</p>
          <p>+1 555 555 5555</p>
        </div>
        <div className="menu-footer-section">
          <p>GENERAL:</p>
          <p>hello@bloomdi.com</p>
          <p>+1 555 555 5555</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
