import React, { useEffect, useRef, useState } from "react";
import { Cross as BurgerMenu } from "hamburger-react";

const Hamburger: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const menu = document.getElementById("menu");
    if (!menu) {
      return;
    }
    const content = document.getElementById("content");

    if (isMenuOpen) {
      menu.style.display = "flex";
      document.body.classList.add("disable-scroll");
      document.body.classList.add("inverted-body");
      if (content) {
        content.style.visibility = "hidden";
      }
    } else {
      menu.style.display = "none";
      document.body.classList.remove("disable-scroll");
      document.body.classList.remove("inverted-body");
      if (content) {
        content.style.visibility = "visible";
      }
    }
  }, [isMenuOpen]);

  const handleToggle = (toggled: boolean) => {
    setIsMenuOpen(toggled);
  };

  return (
    <div id="hamburger">
      <BurgerMenu
        direction="left"
        distance="sm"
        hideOutline={true}
        onToggle={(toggled) => handleToggle(toggled)}
      />
    </div>
  );
};

export default Hamburger;
