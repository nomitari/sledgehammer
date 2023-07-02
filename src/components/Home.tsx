// const Home: React.FC = () => {
//   window.addEventListener("scroll", function () {
//     const flower = document.getElementById("flower");
//     const scrollHeight = document.documentElement.scrollHeight;
//     const windowHeight = window.innerHeight;
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;

//     if (flower) {
//       if (scrollPercentage > 50) {
//         flower.classList.add("bloom");
//       } else {
//         flower.classList.remove("bloom");
//       }
//     }
//   });
//   return (
//     <section id="home">
//       <div id="flower"></div>
//       <h1>GROW YOUR BUSINESS ONLINE</h1>
//       <p>your one-stop-shop for digital expansion</p>
//       <button id="contact-button">CHAT WITH US</button>
//     </section>
//   );
// };

// import React, { useEffect } from 'react';
import React, { useEffect, useRef, useState } from "react";

const Home: React.FC = () => {
  return (
    <section id="home">
      <h1 id="starting-text">GROW YOUR BUSINESS ONLINE</h1>
      <p>your one-stop-shop for digital expansion</p>
    </section>
  );
};

export default Home;
