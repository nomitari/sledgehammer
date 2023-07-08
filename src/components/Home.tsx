// import React, { useEffect } from 'react';
import React, { useCallback, useEffect, useRef, useState } from "react";

const Home: React.FC = () => {
  const textOptions = [
    "business expansion",
    "digital traction",
    "organizational strategy",
    "website development",
    "personalized consulting",
    "optimized solutions"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const setNextIndex = (index: number) => {
    setCurrentIndex(++index % textOptions.length);
  };

  useEffect(() => {
    setTimeout(() => {
      setNextIndex(currentIndex);
    }, 2500);
  }, [currentIndex]);

  return (
    <section id="home">
      <h2>{`Your one-stop-shop for ${textOptions[currentIndex]}`}</h2>
      <h1 className="big-left-text">GROW YOUR BUSINESS ONLINE</h1>
    </section>
  );
};

export default Home;
