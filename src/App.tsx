import React from "react";
import "./index.css";
import Hamburger from "./components/Hamburger";
import Home from "./components/Home";
import Services from "./components/Services";
import LetsGetStarted from "./components/LetsGetStarted";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Slideshow from "./components/Slideshow";
import Flower from "./components/Flower";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  window.addEventListener("load", () => {
    document.body.style.color = "#000";
  });

  return (
    <div>
      <div className="nav-bar">
        <Logo />
        <Hamburger />
      </div>
      <Menu />
      <div id="content">
        <Flower />
        <Home />
        <Slideshow />
        <Services />
        <LetsGetStarted />
        <Footer />
      </div>
    </div>
  );
};

export default App;
