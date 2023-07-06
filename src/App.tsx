import React, { useRef, useState } from "react";
import "./index.css";
// import Flower from "./components/Flower";
import Hamburger from "./components/Hamburger";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import LetsGetStarted from "./components/LetsGetStarted";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

const App: React.FC = () => {
  return (
    <div>
      <div id="nav-bar-container">
        <div id="nav-bar">
          <Logo />
          <Hamburger />
        </div>
      </div>
      <Menu />
      <Home />
      <Services />
      <About />
      <LetsGetStarted />
      <Footer />
    </div>
  );
};

export default App;
