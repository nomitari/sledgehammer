import React from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Services />
      <Portfolio />
      <About aboutText="Hello! I'm a young female entrepreneur with a passion for helping businesses grow in the digital age. With my skills as a full-stack developer and my keen eye for market trends, I provide businesses with the tools they need to succeed." />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
