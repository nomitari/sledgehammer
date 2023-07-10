import React from "react";
import "./../../index.css";
import Landing from "./Landing";
import Lifecycles from "./Lifecycles";
import LetsGetStarted from "./LetsGetStarted";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home: React.FC = () => {
  window.addEventListener("load", () => {
    document.body.style.color = "#000";
  });

  return (
    <div>
      {/* <Nav /> */}
      <div id="content">
        {/* <Flower /> */}
        <Landing />
        <Slideshow />
        <Lifecycles />
        <LetsGetStarted />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
