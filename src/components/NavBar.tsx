import React from "react";

interface Props {}

const NavBar: React.FC<Props> = () => {
  return (
    <nav id="navbar">
      <div className="navbar-items">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
        </ul>
        <a id="logo" href="#">
          bloom
        </a>
        <ul>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
