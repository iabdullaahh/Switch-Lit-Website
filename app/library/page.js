"use client";

import Lottie from "lottie-web";
import React from "react";
import { useEffect, useRef } from "react";
import LibraryAnimations from "../components/LibraryAnimations";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import BooksDisplay from "../components/BooksDisplay";

export default function Library() {
  return (
    <div>
      <LibraryAnimations />

      <section>
        <div className="flex justify-between items-center mt-40 px-10 pb-10">
          {/* First Div: Heading */}
          <div className="">
            <h1 className="text-xs text-gray-600 italic font-bold uppercase px-2 py-1">
              featured stories
            </h1>
          </div>

          {/* Second Div: Buttons */}
          <div className="flex items-center space-x-4 ">
            {/* Left Arrow Button (Disabled) */}
            <button
              className="text-gray-400 cursor-not-allowed px-1 bg-[#F1F3EF] rounded-lg border"
              disabled
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>

            {/* Right Arrow Button */}
            <button className="text-black bg-[#F1F3EF] px-1 rounded-lg border">
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <div className="border-gray-600  border-t-[1px] mx-10 -mt-10 pb-10"></div>
      <BooksDisplay />
    </div>
  );
}
