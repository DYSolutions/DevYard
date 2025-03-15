import React from "react";
import Hero from "./hero";
import "./animation.css";

const Herobg = () => {
  return (
    <div className="relative flex flex-col mediaHeroBg" id="about-me">
      <div className="absolute top-0 left-0 w-full h-full z-10 mediaHeroBgImage">
        <img src="heroBg.png" alt="heroBackground" className="h-[100vh] w-[100%]" />
      </div>

      <div className="relative z-10 mediaHero">
        <Hero />
      </div>
    </div>
  );
};

export default Herobg;