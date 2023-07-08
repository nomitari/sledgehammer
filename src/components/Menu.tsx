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
    </section>
  );
};

export default Menu;
