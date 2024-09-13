"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PencilIcon } from "@heroicons/react/solid";
import Lottie from "lottie-web";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/HomeBooks.json",
    });

    // Cleanup function to stop the animation when the component unmounts
    return () => {
      anim.destroy();
    };
  }, []); // Empty dependency array ensures the effect runs only once
  return (
    <div>
      <div className="flex flex-col items-center w-full h-screen mt-20 pt-[50px]">
        <Image src="logo.svg" alt="Logo" width={280} height={280} />
        <h1 className="text-5xl  break-words font-medium text-black py-5">
          Collaborative Stories for the Collective Imagination.
        </h1>
        <div className="relative w-full ">
          <div
            className="top-0 left-0 right-0 h-[400px] w-full mx-auto"
            ref={animationContainer}
          ></div>
        </div>
      </div>

      <div className="px-10 pt-10 pb-2 g">
        <h1>
          <span className="font-bold text-3xl text-black pr-5">Switch-Lit</span>
          <span className="text-2xl font-normal text-black">
            is a writing platform for collaborative storytelling. Here, two
            writers take turns crafting chapters of a single story and connect
            as equals in imagination across their own parallel world of fiction.
            What happens when one of the writers is you?
          </span>
        </h1>
      </div>

      <div className="flex gap-2 px-10 pb-10">
        <Link href="/start-a-story">
          <button className="text-black font-semibold shadow-slate-400 shadow-2xl text-sm rounded-full px-4 py-2 flex items-center space-x-2 hover:px-5 duration-150">
            <span>Start your own journey</span>
            <PencilIcon className="w-5 h-5 " />
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-black text-white font-semibold px-4 border py-2 text-sm rounded-lg hover:bg-transparent hover:text-black hover:border hover: transition ease-in duration-150">
            Sign Up for free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
