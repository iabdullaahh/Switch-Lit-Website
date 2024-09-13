import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Quote from "./components/Quote";
import Card from "./components/Card";
import Button from "./components/Button";
import Library from "./components/library";
import Prompts from "./components/Prompts";
import React from "react";
import next from "next";

export default function Home() {
  return (
    <div className="width-full overflow-hidden">
      <Hero />
      <div className="px-5 pt-36">
        <h1 className="text-black font-semibold text-6xl text-center border-b-[1px] border-black pb-4">
          The Process is Simple
        </h1>
      </div>
      <Card id="1" desc="Pick a writing partner" image="1.svg" />
      <div className="flex justify-center items-center">
        <Card id="2" desc="Choose your story settings" image="2.svg" />
      </div>
      <div className="flex justify-end items-center">
        <Card id="3" desc="Take turns writing the next chapter" image="3.svg" />
      </div>

      <div className="flex justify-end items-center">
        <Card id="4" desc="Generate your story's cover art" image="4.svg" />
      </div>

      <div className="flex justify-center items-center">
        <Card id="5" desc="Reveal your finished story" image="5.svg" />
      </div>
      <Button />
      <Library />
      <Prompts />
      <Quote />
    </div>
  );
}
