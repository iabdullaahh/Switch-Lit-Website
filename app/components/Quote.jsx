import React from "react";
import Image from "next/image";
import Link from "next/link";

const Quote = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-10 mb-20 mt-40">
        {/* 1st Div: Image (25% width) */}
        <div className="w-1/4 flex self-end mt-36">
          <img src="/Quote.png" alt="Quote Image" className="h-50 w-50" />
        </div>

        {/* 2nd Div: Quote (50% width) */}
        <div className="w-1/2 text-center self-start">
          <p className="text-xl font-semibold text-black">
            "Just remember that your real job is that if you are
            <br />
            free, you need to free somebody else. If you have
            <br />
            some power, then your job is to empower somebody
            <br />
            else. This is not just a grab-bag candy game.”
          </p>
        </div>

        {/* 3rd Div: Author (25% width) */}
        <div className="w-1/4 flex self-center">
          <ul className="list-disc">
            <li className="text-lg font-medium text-black italic">
              {" "}
              Toni Morrison
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Quote;
