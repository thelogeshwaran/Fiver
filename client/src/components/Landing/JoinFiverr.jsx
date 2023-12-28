import Image from "next/image";
import React from "react";

function JoinFiverr() {
  return (
    <div className="mx-32 my-16 relative">
      <div className="absolute z-10 top-1/3 left-10">
        <h4 className="text-white text-5xl mb-5 ">
          Suddenly it's all so <i>doable.</i>
        </h4>
        <button className="bg-[#1cbf73] rounded-md text-white p-2">
          Join Fiverr
        </button>
      </div>
      <div className="h-96 w-full">
        <Image src={"/bg-signup.webp"} fill className="rounded-sm" />
      </div>
    </div>
  );
}

export default JoinFiverr;
