import React, { useState } from "react";

interface Props {}
interface useState {}

const Menu: React.FC<Props> = () => {
  return (
    <section id="menu">
      <ul className="menu-items">
        <li className="menu-item">
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
