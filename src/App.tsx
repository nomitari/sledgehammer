import React, { useRef, useState } from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import LetsGetStarted from "./components/LetsGetStarted";
import Footer from "./components/Footer";
import { useEffect } from "react";

const App: React.FC = () => {
  // const [isBloomed, setIsBloomed] = useState(0);
  // const flowerRef = useRef<HTMLDivElement>(null);

  // const handleScroll = () => {
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const windowHeight = window.innerHeight;
  //   const scrollTop = window.scrollY || document.documentElement.scrollTop;

  //   const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;

  //   setIsBloomed(scrollPercentage);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // window.addEventListener("DOMContentLoaded", function () {
  const flowerBloom = () => {
    const flower = document.getElementById("flower");
    if (!flower) {
      console.log("GHIEFHSIHFL");
      return;
    }
    const totalSpriteSheets = 8; // Adjust this based on the number of sprite sheets

    // Initialize the flower animation
    const scrollHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
    const spriteSheetToShow = Math.floor(
      (scrollPercentage / 100) * totalSpriteSheets
    );
    const frameWidth = 300; // Adjust this based on the width of each frame in your sprite sheet

    // Load the corresponding sprite sheet image
    const spriteSheetURL = `img/flower${spriteSheetToShow + 1}.png`;

    // Calculate the background position based on the sprite sheet and scroll percentage
    const backgroundPositionX = -frameWidth * spriteSheetToShow;

    // Set the background image and position
    flower.style.backgroundImage = `url(${spriteSheetURL})`;
    flower.style.backgroundPosition = `${backgroundPositionX}px 0`;
  };

  window.setInterval(flowerBloom, 100);

  // window.addEventListener("scroll", function () {
  //   const flower = document.getElementById("flower");
  //   const totalSpriteSheets = 8;
  //   if (!flower) {
  //     return;
  //   }
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const windowHeight = window.innerHeight;
  //   const scrollTop = window.scrollY || document.documentElement.scrollTop;

  //   const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
  //   const spriteSheetToShow = Math.floor(
  //     (scrollPercentage / 100) * totalSpriteSheets
  //   );

  //   // Load the corresponding sprite sheet image
  //   const spriteSheetURL = `img/flower${spriteSheetToShow + 1}.png`;

  //   // Set the background image and position based on the sprite sheet
  //   // Calculate the background position based on the sprite sheet and scroll percentage
  //   const frameWidth = 100; // Adjust this based on the width of each frame in your sprite sheet
  //   const backgroundPositionX = -frameWidth * spriteSheetToShow;

  //   // Set the background image and position
  //   flower.style.backgroundImage = `url(${spriteSheetURL})`;
  //   flower.style.backgroundPosition = `${backgroundPositionX}px 0`;
  // });
  // });

  return (
    <div>
      {/* <div
        ref={flower}
        className={`flower ${isBloomed ? "bloom" : ""}`}
      ></div> */}
      <NavBar />
      <Home />
      <div id="flower"></div>
      <Services />
      <About />
      <LetsGetStarted />
      <Footer />
    </div>
  );
};

export default App;
