import React from "react";
import "./../../index.css";
import Landing from "./Landing";
import Lifecycles from "./Lifecycles";
import LetsGetStarted from "./LetsGetStarted";
import Slideshow from "./Slideshow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: React.FC = () => {
  window.addEventListener("load", () => {
    document.body.style.color = "#000";
  });

  return (
    <div>
      <div className="content">
        <Landing />
        <Slideshow />
        <Lifecycles />
        <LetsGetStarted />
      </div>
    </div>
  );
};

export default Home;
