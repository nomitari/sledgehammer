import React from "react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App: React.FC = () => {
  window.addEventListener("load", () => {
    document.body.style.color = "#000";
  });

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
