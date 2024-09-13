"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Hamburger and close icons
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false); // Track scroll

  const handleNav = () => {
    setNav(!nav);
  };

  // Track scrolling to add a glass effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full h-16 z-50 fixed top-0 left-0 transition-all duration-300 ${
        scroll
          ? "bg-white bg-opacity-30 backdrop-blur-lg" // Apply glass effect when scrolled
          : "bg-[#F9F9F7] "
      } border-b-[1px] border-black`}
    >
      <div className="flex justify-between items-center h-full px-4 md:px-8">
        {/* Left Section (Logo) */}
        <div className="flex items-center">
          <Link href="/">
            <Image src="logo.svg" alt="Logo" width={120} height={140} />
          </Link>
        </div>

        {/* Middle Section (Links) */}
        <ul className="hidden md:flex space-x-6 font-medium text-black uppercase font-semibold text-sm">
          <li className="relative group">
            <Link href="/start-a-story">Start a Story</Link>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <Link href="/prompts">Prompts</Link>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <Link href="/library">Library</Link>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </li>
          <li className="relative group">
            <Link href="/about">About</Link>
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </li>
        </ul>

        {/* Right Section (Login & Signup) */}
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <button className="text-black font-semibold border-[1px] border-black rounded-md px-2 py-1 hover:px-5 duration-150">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="hidden md:inline-block bg-black border text-white font-semibold px-2 py-1 rounded-md hover:bg-blue-700 hover:bg-transparent hover:text-black hover:border hover: transition ease-in duration-150">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          nav ? "block" : "hidden"
        } md:hidden bg-white absolute w-full h-screen left-0 top-16 flex flex-col items-center`}
      >
        <ul className="space-y-6 font-medium text-lg text-gray-700">
          <li>
            <Link href="/story">Start a Story</Link>
          </li>
          <li>
            <Link href="/prompts">Prompts</Link>
          </li>
          <li>
            <Link href="/library">Library</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/faqs">FAQs</Link>
          </li>
        </ul>
        <div className="mt-6">
          <Link href="/login">
            <button className="text-gray-700 font-medium">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
