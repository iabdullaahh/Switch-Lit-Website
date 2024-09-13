import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card(props) {
  return (
    <div className="flex gap-2 px-10 pt-10">
      <h2 className="text-5xl font-semibold text-black ">{props.id}</h2>
      <div className="mt-2 pt-2 flex flex-col bg-[#F1F3EF] rounded-md border">
        <p className="text-black pl-2 font-semibold capitalize text-sm tracking-wide">
          {props.desc}
        </p>
        <Image src={props.image} alt="" width={550} height={550} />
      </div>
    </div>
  );
}

export default Card;
