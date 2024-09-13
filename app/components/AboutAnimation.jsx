"use client";

import React from "react";
import { useRef, useEffect } from "react";
import next from "next";
import Lottie from "lottie-web";

const AboutAnimation = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Team.json",
    });

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      anim.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <div className="relative w-full ">
        <div
          className="top-0 left-0 right-0 h-full w-full mx-auto"
          ref={animationContainer}
        ></div>
      </div>
    </div>
  );
};

export default AboutAnimation;
