import React from "react";
import ContactInfoFooter from "./ContactInfoFooter";

const Menu: React.FC = () => {
  return (
    <section id="menu">
      <ul id="nav-items">
        <li className="nav-item">
          <a href="./services">SERVICES</a>
        </li>
        <li className="nav-item">
          <a href="./about">ABOUT</a>
        </li>
        <li className="nav-item">
          <a href="./contact">CONTACT</a>
        </li>
      </ul>
      <ContactInfoFooter />
    </section>
  );
};

export default Menu;
