"use client";

import { useState, useEffect, useRef } from "react";
import Lottie from "lottie-web";

const StartaStory = () => {
  const [selectedCircle, setSelectedCircle] = useState(null);
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/MovingBook.json",
    });

    return () => {
      anim.destroy();
    };
  }, []);

  const handleCircleClick = (index) => {
    setSelectedCircle(index);
  };

  const descriptions = [
    "Write a story or poem featuring a female protagonist inspired by the youthful or defining experiences of your own mother(s).",
    "This song by John Lennon: “Mother, you had me / But I never had you / I, I wanted you / You didn't want me / So, II just got to tell you…”",
    "My mother died suddenly when I was just a few months old at least, that's what I was always told. But fifty years later, after my lovely father passed away, I received an email from someone claiming to be her.",
    "I think I hurt my mother / That feels like getting shot / I got got / More than a few times over / With this thought: Did I hurt her? Or not?",
    "Invite your mother or any maternal figure in your life to write a story or poem together.",
  ];

  const contributedTexts = [
    "• Contributed by Switch-Lit",
    "• Contributed by Jyllian Gunther",
    "• Contributed by Russell Quinn",
    "• Contributed by Christianne Karefa-johnson",
    "• Contributed by Jyllian Gunther",
  ];

  return (
    <div className="flex justify-between mt-20 p-8">
      {/* Left Div */}
      <div className="flex flex-col pl-16 mt-10 items-center">
        <h1 className="text-6xl font-bold pb-20 uppercase italic tracking-tighter text-black text-center mb-4">
          <div>Start</div>
          <div>A</div>
          <div>New</div>
          <div>Story</div>
        </h1>
        <div className="w-96 h-96">
          <div className="relative w-full -mt-28">
            <div
              className="top-0 left-0 right-0 h-[400px] w-full mx-auto"
              ref={animationContainer}
            ></div>
          </div>
        </div>
      </div>

      {/* Right Div */}
      <div className="flex flex-col justify-start ml-8">
        <p className="my-10 text-center capitalize tracking-tighter px-20 text-2xl text-gray-600">
          Choose from the settings below to customize the shape of your story
          and invite your writing partner.
        </p>
        <p className="mt-10 mb-4 text-start font-semibold capitalize tracking-wide px-20 text-sm text-gray-600">
          Story Prompt (Optional)
        </p>
        <div className="flex pl-20 flex-col">
          <div className="bg-[#F1F3F0] rounded-lg py-8  flex items-center">
            <div className="flex flex-col items-center  mr-4">
              <div className=" ">
                <h1 className="pl-4  mr-5 text-black border-r border-black rounded-none  h-22 flex items-center justify-center text-9xl font-bold">
                  1
                </h1>
              </div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition duration-300 ease-in-out ${
                      selectedCircle === index
                        ? "bg-[#31E992] border-black"
                        : "bg-[#F1F3F0] border-[#F1F3F0]"
                    } border border-solid`}
                    onClick={() => handleCircleClick(index)}
                  >
                    <div
                      className={`text-sm text-center ${
                        selectedCircle === index
                          ? "text-black"
                          : "text-gray-600"
                      }`}
                      style={{
                        color: selectedCircle === index ? "black" : "gray",
                      }}
                    >
                      {selectedCircle === index ? (
                        <div className="absolute bg-black text-white p-2 text-xs rounded-lg top-full left-1/2 transform -translate-x-1/2 mt-2 w-64">
                          <div>{descriptions[index]}</div>
                          <div className="text-xs mt-2">
                            {contributedTexts[index]}
                          </div>
                        </div>
                      ) : (
                        <div className="text-gray-600 border px-4 py-2 border-black rounded-full text-lg">
                          {index + 1}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {selectedCircle !== null && (
                  <div className="absolute left-[-30px] top-[-5px]">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#31E992] border-2 border-black" />
                  </div>
                )}

                <button className="ml-10 px-2 py-1  bg-white py-0 text-sm border border-black text-black rounded-md">
                  No Prompt
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="mt-10 mb-4 text-start font-semibold capitalize tracking-wide px-20 text-sm text-gray-600">
            Writing Partner
          </p>

          <div className="bg-[#F1F3F0] ml-20  py-10 rounded-lg">
            <div className="flex gap-1  w-16 h-22 ">
              <h1 className="px-2 text-black border-r border-black rounded-none flex items-center justify-center text-9xl font-bold">
                2
              </h1>

              <div className="flex flex-col justify-center gap-2 pl-7">
                <p className="text-start font-semibold capitalize tracking-wide  text-sm text-gray-600">
                  Invite a new writing partner
                </p>
                <input
                  type="text"
                  placeholder="Email  Address"
                  className="mt-2 px-4 py-1 rounded-md bg-[#F1F3F0] border rounded text-gray-600 tracking-wider  w-80"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="mt-10 mb-4 text-start font-semibold capitalize tracking-wide px-20 text-sm text-gray-600">
            Story Settings
          </p>

          <div className="bg-[#F1F3F0] ml-20 pt-10 h-96 rounded-lg">
            <div className="flex gap-1 w-16 h-92">
              <h1 className="px-2 text-black border-r border-black rounded-none flex  justify-center text-9xl font-bold">
                3
              </h1>

              <div className="flex flex-col gap-2 pl-7">
                {/* Chapters per writer */}
                <div className="mb-4">
                  <label className="block text-black text-xs tracking-wider font-semibold mb-2">
                    Chapters per writer
                  </label>
                  <div className="flex gap-2">
                    <p className="text-gray-400 text-sm border-gray-400 border-[1px] rounded-md py-1 pr-14 pl-2">
                      3
                    </p>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      defaultValue="3"
                      className="w-96 appearance-none mt-3 border-[1px] border-gray-400  h-2 bg-gray-300 rounded-lg focus:outline-none slider-thumb"
                    />
                  </div>
                </div>

                {/* Word limit per chapter */}
                <div className="mb-4">
                  <label className="block text-black text-xs tracking-wider font-semibold mb-2">
                    Word limit per chapter
                  </label>
                  <div className="flex gap-2">
                    <p className="text-gray-400 text-sm border-gray-400 border-[1px] rounded-md py-1 pr-14 pl-2">
                      200
                    </p>
                    <input
                      type="range"
                      min="100"
                      max="1000"
                      defaultValue="200"
                      className="w-96 appearance-none mt-3 border-[1px] border-gray-400  h-2 bg-gray-300 rounded-lg focus:outline-none slider-thumb"
                    />
                  </div>
                </div>

                {/* Time limit per chapter */}
                <div className="mb-4">
                  <label className="block text-black text-xs tracking-wider font-semibold mb-2">
                    Time limit per chapter (days)
                  </label>
                  <div className="flex gap-2 ">
                    <p className="text-gray-400 text-sm border-gray-400 border-[1px] rounded-md py-1 pr-12 w-28 pl-2">
                      7 days
                    </p>
                    <input
                      type="range"
                      min="1"
                      max="14"
                      defaultValue="7"
                      className=" w-96 appearance-none mt-3 border-[1px] border-gray-400  h-2 bg-gray-300 rounded-lg focus:outline-none slider-thumb "
                    />
                  </div>
                </div>

                {/* Button for who writes first */}
                <div className="flex flex-col ">
                  <label className="block text-black text-xs tracking-wider font-semibold mb-2">
                    Who writes the first chapter?
                  </label>

                  <div className="flex gap-2">
                    <button className="px-2 py-1 text-sm border border-gray-400 text-gray-400 rounded-md">
                      My partner
                    </button>
                    <button className="px-2 py-1 text-sm border border-gray-400 text-gray-400 rounded-md">
                      Me!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="mt-12 mb-4 text-start font-semibold capitalize tracking-wide px-20 text-sm text-gray-600">
            Proposal Review
          </p>
          <div className="flex w-full gap-5 mb-20">
            <div className="bg-[#F1F3F0] w-9/12 ml-20  py-10 rounded-lg">
              <div className="flex gap-1  w-16 h-22 ">
                <h1 className="px-2 text-black border-r border-black rounded-none flex items-center justify-center text-9xl font-bold">
                  4
                </h1>

                <div className="flex flex-col justify-center gap-2 pl-7">
                  <p className="text-start font-semibold capitalize w-96 tracking-wide  text-sm text-gray-600">
                    Please log in or create an account in order to send your
                    story proposal to your writing partner (:
                  </p>
                  <div className="flex gap-2">
                    <button className="bg-black text-white px-4 py-2 text-xs font-semibold rounded-md hover:bg-transparent hover:text-black hover:border-gray-600  border-[1px] transition duration-300">
                      Sign Up
                    </button>
                    <button className="text-black px-4 py-2 text-xs font-semibold rounded-md hover:bg-black hover:text-white hover:border-black  border-[1px] transition duration-300">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F1F3F0] w-3/12 flex items-center justify-center  rounded-3xl">
              <button
                className="bg-transparent text-gray-400 text-sm font-semibold cursor-not-allowed flex items-center justify-center"
                disabled
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a4 4 0 00-4 4v3H5a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2v-7a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zm1 7V6a1 1 0 00-2 0v3h2zm-4 5a1 1 0 112 0v2a1 1 0 11-2 0v-2z" />
                </svg>
                Send Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartaStory;
