import { PencilIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import next from "next";
import AboutAnimation from "../components/AboutAnimation";

export default function About() {
  return (
    <div>
      <div className="flex flex-col w-full px-96 h-max">
        <div className="pt-28 pb-10 flex items-start gap-2  ">
          <h1 className="text-black tracking-wide text-2xl font-medium">
            Welcome To
          </h1>
          <Image src="logo.svg" alt="Logo" width={160} height={160} />
        </div>
        <h1 className="text-black pb-10 tracking-wide text-2xl font-medium">
          We’re thrilled to meet you here – at the beginning of an extraordinary
          journey into the evolution of collaborative fiction as a catalytic
          structure for our time.
        </h1>

        <h1 className="text-black pb-10 tracking-wide text-2xl font-medium">
          <span className="font-semibold italic">
            Our mission is universal:{" "}
          </span>
          to manifest the collective imagination of an increasingly diverse
          generation of writers and storytellers around the world through the
          connective power of collaborative fiction and poetry.
        </h1>

        <h1 className="text-black pb-10 tracking-wide text-2xl font-medium">
          We envision Switch-Lit as{" "}
          <span className="font-semibold italic">
            a dedicated public space{" "}
          </span>
          in a remote corner of the Internet where the forces of your
          imagination can freely meet and play with other writers towards the
          creation of new worlds, unimaginable by a single mind.
        </h1>

        <h1 className="text-black pb-10 tracking-wide text-2xl font-medium">
          As we open this universe and community to all, we hope that you, dear
          Reader, will become one of its first writers. How far and wide can you
          take a story worth sharing (and with whom)?
        </h1>

        <h1 className="text-black pb-10 tracking-wide text-2xl font-medium">
          Where might it take all of us in the end?
        </h1>

        <div className="flex justify-center gap-2 px-10 pb-40">
          <Link href="/start-a-story">
            <button className="text-black font-semibold shadow-slate-400 shadow-2xl text-sm rounded-full px-4 py-2 flex items-center space-x-2 hover:px-10 duration-150">
              <span>Start your own journey</span>
              <PencilIcon className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-black text-white font-semibold border px-4 py-2 text-sm rounded-lg hover:bg-transparent hover:text-black hover:border hover: transition ease-in duration-150">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="flex  pb-60 bg-[#F1F3F0] h-full">
        <div className="flex flex-col ml-10 pt-10">
          <h1 className="text-black text-4xl italic underline tracking-tighter font-semibold ">
            TEAM:
          </h1>
          <AboutAnimation />
        </div>

        <div className="pl-40 flex flex-col">
          <div className=" flex justify-between border-black border-t-[1px] mt-24 pt-2  mx-10 ">
            <div className="flex flex-col ">
              <h1 className="text-black  text-xl font-semibold">
                • Kenneth Chu,
              </h1>
              <p className="text-black pl-4 text-base"> Portland, OR (USA)</p>
            </div>
            <p className=" text-black text-lg italic font-medium">
              Executive Editor
            </p>
          </div>

          <div className=" flex justify-between  border-black border-t-[1px] mt-4 pt-2  mx-10 ">
            <div className="flex flex-col ">
              <h1 className="text-black  text-xl font-semibold">
                • Diana Ecker,
              </h1>
              <p className="text-black pl-4 text-base"> Portland, OR (USA)</p>
            </div>
            <p className="text-black text-lg italic font-medium">
              Deputy Editor
            </p>
          </div>

          <div className=" flex justify-between  border-black border-t-[1px] mt-4 pt-2  mx-10 ">
            <div className="flex flex-col ">
              <h1 className="text-black  text-xl font-semibold">
                • Julia Bosson,
              </h1>
              <p className="text-black pl-4 text-base"> Berlin (DE)</p>
            </div>
            <p className="text-black text-lg italic font-medium">
              Literary Advisor
            </p>
          </div>

          <div className=" flex justify-between border-black border-t-[1px] mt-4 pt-2  mx-10">
            <div className="flex flex-col ">
              <h1 className="text-black  text-xl font-semibold">
                • Orion Rea,
              </h1>
              <p className="text-black pl-4 text-base"> Morro Bay, CA (USA)</p>
            </div>
            <p className="text-black text-lg italic font-medium">
              Editorial Intern
            </p>
          </div>

          <div className=" flex justify-between  border-black border-t-[1px] mt-4 pt-2 mx-10 ">
            <div className="flex flex-col ">
              <h1 className="text-black  text-xl font-semibold">
                • Studio Airport,
              </h1>
              <p className="text-black pl-4 text-base"> Utrecht (NL)</p>
            </div>
            <p className="text-black text-lg italic font-medium">
              Art Direction & Design
            </p>
          </div>

          <div className=" flex justify-between  border-black border-t-[1px] mt-4 pt-2  mx-10  ">
            <div className="flex flex-col">
              <h1 className="text-black  text-xl font-semibold">
                • September Digital,
              </h1>
              <p className="text-black pl-4 text-base"> Utrecht (NL)</p>
            </div>
            <p className="text-black text-lg italic font-medium">
              Web Development
            </p>
          </div>

          <div className=" flex justify-between  border-black border-t-[1px] mt-4 pt-2  mx-10">
            <div className="flex flex-col ">
              <h1 className="text-black  text-xl font-semibold">• Robin,</h1>
              <p className="text-black pl-4 text-base">Breda (NL) </p>
            </div>
            <p className="pl-80 text-black text-lg italic font-medium">
              Illustrations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
