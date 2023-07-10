import React from "react";
import "./../../index.css";
import Home from "./Home";
import Lifecycles from "./Lifecycles";
import LetsGetStarted from "./LetsGetStarted";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main: React.FC = () => {
  window.addEventListener("load", () => {
    document.body.style.color = "#000";
  });

  return (
    <div>
      {/* <Nav /> */}
      <div id="content">
        {/* <Flower /> */}
        <Home />
        <Slideshow />
        <Lifecycles />
        <LetsGetStarted />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
