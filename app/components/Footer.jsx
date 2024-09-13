import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  return (
    <footer className="w-full bg-black pt-8 pb-2 px-10 text-white">
      <div className="flex flex-col md:flex-row justify-between">
        {/* First Div: Links */}
        <div className="flex flex-col space-y-4 uppercase text-sm justify-center">
          <Link
            href="/start-a-story"
            className="relative text-white px-1 py-2 hover:text-gray-500   text-xs before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-gray-500 before:transition-all before:content-[''] hover:before:w-full"
          >
            start a story
          </Link>
          <Link
            href="/prompts"
            className="relative text-white px-1 py-2 hover:text-gray-500   text-xs before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-gray-500 before:transition-all before:content-[''] hover:before:w-full"
          >
            prompts
          </Link>
          <Link
            href="/library"
            className="relative text-white px-1 py-2 hover:text-gray-500   text-xs before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] before:bg-gray-500 before:transition-all before:content-[''] hover:before:w-full"
          >
            Library
          </Link>
        </div>

        {/* Second Div: Logo, Description, Copyright, Terms */}
        <div className="flex flex-col items-center ">
          {/* Logo */}
          <h1 className="text-7xl text-white font-semibold pb-2">S-L</h1>

          {/* Description */}
          <p className="text-white text-center text-3xl capitalize leading-none">
            Collaborative Stories for the
          </p>
          <p className="text-white text-center text-3xl capitalize leading-none">
            Collective Imagination
          </p>

          {/* Copyright */}
          <p className="text-white text-xs pt-2">
            {" "}
            Created by Abdullah Aqeel, ©{currentYear}{" "}
          </p>

          {/* Terms and Conditions */}
          <Link
            href="#"
            className="text-white text-center text-xs capitalize hover:underline"
          >
            Terms & Conditions
          </Link>
        </div>

        {/* Third Div: Buttons */}

        <div className="flex flex-col space-y-4 justify-center ">
          <Link href="https://x.com/iabdullaaahh">
            <button className="bg-white text-black font-semibold shadow-slate-100 shadow-2xl text-sm rounded-lg px-4  py-2 flex items-center space-x-2">
              <span className="pr-6">Twitter</span>
              <TwitterLogoIcon className="w-5 h-5 " />
            </button>
          </Link>
          <Link href="https://www.instagram.com/iabdullaahh/">
            <button className="bg-white text-black font-semibold shadow-slate-100 shadow-2xl text-sm rounded-lg px-4 py-2 flex items-center space-x-2">
              <span>Instagram</span>
              <InstagramLogoIcon className="w-5 h-5" />
            </button>
          </Link>

          <Link href="https://www.facebook.com/Abdullah.shAykh.11">
            <button className="bg-white text-black font-semibold shadow-slate-100 shadow-2xl text-sm rounded-lg px-4 py-2 flex items-center space-x-2">
              <span>Facebook</span>
              <AiFillFacebook className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
