import React, { useState } from "react";

interface Props {}
interface useState {}

const Hamburger: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(Boolean);

  const handleToggle = () => {
    const btnLine1 = document.getElementById("first-line");
    const btnLine2 = document.getElementById("second-line");
    const menu = document.getElementById("menu");
    const home = document.getElementById("home");
    if (isOpen) {
      if (btnLine1) {
        btnLine1.style.transform = "none";
      }
      if (btnLine2) {
        btnLine2.style.transform = "none";
      }
      setIsOpen(false);
      if (menu) {
        menu.style.display = "none";
      }
      if (home) {
        home.style.display = "flex";

      }
    } else {
      if (btnLine1) {
        btnLine1.style.transform = "translate(0.1vw, -0.65vw) rotate(45deg)";
        btnLine1.style.transformOrigin = "top left";
      }
      if (btnLine2) {
        btnLine2.style.transform = "translate(0, 0.85vw) rotate(-45deg)";
        btnLine2.style.transformOrigin = "top left";
      }
      setIsOpen(true);
      if (menu) {
        menu.style.display = "flex";
      }
      if (home) {
        home.style.display = "none";
      }
    }
  };

  return (
    <div className="menu-btn" onClick={handleToggle}>
      <div id="first-line" className="btn-line"></div>
      <div id="second-line" className="btn-line"></div>
    </div>
  );
};

export default Hamburger;
