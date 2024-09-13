import React from "react";
import { PencilIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Button = () => {
  return (
    <div className="pt-10 px-10 flex justify-start items-center mb-20">
      <Link href="/start-a-story">
        <button className="text-black font-semibold shadow-slate-400 shadow-2xl  text-sm rounded-full px-4 py-2 flex items-center space-x-2 hover:px-8 duration-150">
          <span>Start your own journey</span>
          <PencilIcon className="w-5 h-5" />
        </button>
      </Link>
    </div>
  );
};

export default Button;
