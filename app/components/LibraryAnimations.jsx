"use client";

import React from "react";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

const LibraryAnimations = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/Books.json",
    });

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      anim.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <section>
        <div>
          <h1 className="text-black text-6xl font-bold leading-none flex pt-20 uppercase justify-center">
            Switch-Lit
          </h1>
          <h1 className="italic text-gray-600 text-5xl font-bold tracking-tight leading-none flex  justify-center uppercase">
            Library{" "}
          </h1>
          <div className="relative w-full -mt-28">
            <div
              className="top-0 left-0 right-0 h-[400px] w-full mx-auto"
              ref={animationContainer}
            ></div>
          </div>
          <p className="text-black text-2xl italic flex justify-center -mt-24 mb-20 font-normal ">
            Coming Soon in 2024.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LibraryAnimations;
