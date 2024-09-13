import React from "react";
import { ArrowLeftIcon, ArrowRightIcon, EyeIcon } from "@heroicons/react/solid";

const Library = () => {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-black px-10 pb-10">
      {/* First Div: Heading */}
      <div>
        <h1 className="text-6xl capitalize text-black font-bold bg-[#F1F3EF] rounded-lg border px-2 py-1">
          Library coming soon…
        </h1>
      </div>

      {/* Second Div: Buttons */}
      <div className="flex items-center space-x-4 ">
        {/* Left Arrow Button (Disabled) */}
        <button
          className="text-gray-400 cursor-not-allowed px-1 bg-[#F1F3EF] rounded-lg border"
          disabled
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>

        {/* Right Arrow Button */}
        <button className="text-black bg-[#F1F3EF] px-1 rounded-lg border">
          <ArrowRightIcon className="w-6 h-6" />
        </button>

        {/* See All Button with Eye Icon */}
        <button className="text-black font-semibold px-2 flex items-center space-x-2 bg-[#F1F3EF] rounded-lg border">
          <span>See All</span>
          <EyeIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Library;
