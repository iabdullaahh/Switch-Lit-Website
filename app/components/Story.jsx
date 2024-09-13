"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { PencilIcon } from "@heroicons/react/solid";
import next from "next";
import { useCallback } from "react";

const Story = () => {
  const [bgImage, setBgImage] = useState("");



  const handleMouseEnter = useCallback((image) => {
    setTimeout(() => setBgImage(image), 100); // Throttle to reduce load
  }, []);

  // Handle mouse leave to remove background
  const handleMouseLeave = () => {
    setBgImage("");
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-contain bg-center  ease-in duration-100 z-[-1]`}
        style={{ backgroundImage: `url('/${bgImage}')` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-h-full">
        {/* F */}
        <div className="flex flex-col items-center pt-20 pb-40 p-4">
          {/* First Part: Date */}
          <div>
            <h1 className="text-[28px] tracking-widest text-slate-900 font-semibold">
              SEPTEMBER 2024
            </h1>
          </div>

          {/* Second Part: Description and Contributors */}
          <div className="text-center tracking-widest text-gray-700 mx-48 mt-4">
            <p className="text-[26px] leading-none">
              Every Month, we release new story prompts to help you launch your
              next collaborative fiction journey. Special guest contributors
              include{" "}
              <a href="#" className="text-gray-700 underline">
                Russell Quinn
              </a>
              ,{" "}
              <a href="#" className="text-gray-700 underline">
                Christianne Karefa-Johnson
              </a>
              , and{" "}
              <a href="#" className="text-gray-700 underline">
                Jyllian Gunther
              </a>
              .
            </p>
          </div>

          {/* Third Part: Theme */}
          <div className="mt-6 tracking-widest">
            <p className="text-[24px] text-gray-700">
              This Month’s Theme:{" "}
              <span className="italic font-semibold text-black">Mother</span>
            </p>
          </div>
        </div>

        {/* F */}
        <div className="flex flex-col gap-10 px-10">
          <div className="flex justify-between gap-5 w-full">
            <div
              className="flex items-start  w-4/12 gap-2"
              onMouseEnter={() => handleMouseEnter("BG-1.JPG")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mt-1 flex w-28 h-6 text-black items-center justify-center rounded-full border border-black text-lg font-semibold hover:bg-black hover:text-white transition-colors duration-300">
                <span>1</span>
              </div>
              <div className="flex flex-col pr-20 gap-2">
                <h1 className="text-black tracking-tight font-medium text-2xl hover:font-bold hover:tracking-wide transition-all duration-300">
                  Write a story or poem featuring a female protagonist inspired
                  by the youthful or defining experiences of your own mother(s).
                </h1>
                <p className="text-sm tracking-wider text-black mt-1">
                  • Contributed by{" "}
                  <span className="italic font-semibold">Switch-Lit</span>
                </p>
              </div>
            </div>

            <div
              className="flex pt-44 w-4/12 items-end"
              onMouseEnter={() => handleMouseEnter("BG-3.JPG")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex  gap-2">
                <div className="mt-1 flex w-44 h-6 text-black items-center justify-center rounded-full border border-black text-lg font-semibold hover:bg-black hover:text-white transition-colors duration-300">
                  <span>3</span>
                </div>
                <div className="flex flex-col pr-20 gap-2">
                  <h1 className="text-black tracking-tight font-medium text-2xl hover:font-bold hover:tracking-wide transition-all duration-300">
                    My mother died suddenly when I was just a few months old at
                    least, that's what I was always told. But fifty years later,
                    after my lovely father passed away, I received an email from
                    someone claiming to be her.
                  </h1>
                  <p className="text-sm tracking-wider text-black mt-1">
                    • Contributed by{" "}
                    <span className="italic font-semibold">Russell Quinn</span>
                  </p>
                </div>
              </div>
            </div>

            <div
              className="flex items-center -mt-20 w-4/12 "
              onMouseEnter={() => handleMouseEnter("BG-4.JPG")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex gap-2">
                <div className="mt-1 flex w-28 h-6 text-black items-center justify-center rounded-full border border-black text-lg font-semibold hover:bg-black hover:text-white transition-colors duration-300">
                  <span>4</span>
                </div>
                <div className="flex flex-col pr-20 gap-2">
                  <h1 className="text-black tracking-tight  font-medium text-2xl hover:font-bold hover:tracking-wide transition-all duration-300">
                    I think I hurt my mother / That feels like getting shot / I
                    got got / More than a few times over / With this thought:
                    Did I hurt her? Or not?
                  </h1>
                  <p className="text-sm tracking-wider text-black mt-1">
                    • Contributed by{" "}
                    <span className="italic font-semibold">
                      Christianne Karefa-johnson
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-5 w-full pt-20 px-10">
            <div
              className="flex pt-10 w-4/12 gap-2"
              onMouseEnter={() => handleMouseEnter("BG-2.JPG")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mt-1 flex w-28 h-6 text-black items-center justify-center rounded-full border border-black text-lg font-semibold hover:bg-black hover:text-white transition-colors duration-300">
                <span>2</span>
              </div>
              <div className="flex flex-col pr-20 gap-2">
                <h1 className="text-black tracking-tight  font-medium text-2xl hover:font-bold hover:tracking-wide transition-all duration-300">
                  This song by John Lennon: “Mother, you had me / But I never
                  had you / I, I wanted you / You didn't want me / So, II just
                  got to tell you…”
                </h1>
                <p className="text-sm tracking-wider text-black mt-1">
                  • Contributed by{" "}
                  <span className="italic font-semibold">Jyllian Gunther</span>
                </p>
              </div>
            </div>

            <div
              className="flex -mt-20 w-4/12 gap-2"
              onMouseEnter={() => handleMouseEnter("BG-5.JPG")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="mt-1 flex w-20 h-6 text-black items-center justify-center rounded-full border border-black text-lg font-semibold hover:bg-black hover:text-white transition-colors duration-300">
                <span>5</span>
              </div>
              <div className="flex flex-col pr-20 gap-2">
                <h1 className="text-black tracking-tight font-medium text-2xl hover:font-bold hover:tracking-wide transition-all duration-300">
                  Invite your mother or any maternal figure in your life to
                  write a story or poem together.
                </h1>
                <p className="text-sm tracking-wider text-black mt-1">
                  • Contributed by{" "}
                  <span className="italic font-semibold">Jyllian Gunther</span>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-10 px-10 flex justify-center items-center mb-20">
            <button className="text-black font-semibold shadow-slate-400 shadow-2xl border-black border-[1px] text-sm rounded-full px-4 py-2 flex items-center space-x-2 hover:pr-8 duration-150">
              <span>Start without a Prompt</span>
              <PencilIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
