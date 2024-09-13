import React from "react";
import Image from "next/image";
import { LightningBoltIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Prompts = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start px-10 pt-40">
        {/* First Div: Picture */}
        <div className="md:w-1/2 w-full">
          <img
            src="prompts.jpg"
            alt="Descriptive Alt Text"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Second Div: Heading, Paragraph, and Button */}
        <div className="md:w-1/2  w-full mt-6 md:mt-0 md:ml-6">
          <h1 className="text-black text-6xl font-bold">Monthly Prompts</h1>
          {/* Border under the heading */}
          <hr className="border-t-[1px] border-black my-4" />
          <p className="text-gray-800 pb-5 text-2xl leading-none capitalize">
            Every month, we release new story prompts with special guest authors
            to help you launch your next collaborative fiction journey.
          </p>
          <Link href="/prompts">
            <button className="text-black font-semibold shadow-slate-400 shadow-2xl  text-sm rounded-full px-4 py-2 flex items-center space-x-2 hover:px-8 duration-150">
              <span>Read Latest Prompts</span>
              <LightningBoltIcon className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Prompts;
