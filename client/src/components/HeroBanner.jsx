import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function HeroBanner() {
  const [image, setImage] = useState(1);
  const popularServices = [
    "Website Design",
    "WordPress",
    "Logo Design",
    "AI Services",
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setImage(image >= 6 ? 1 : image + 1),
      10000
    );
    return () => clearInterval(interval);
  }, [image]);
  console.log(image);
  return (
    <div className="h-[690px] relative bg-cover">
      <div className="absolute top-0 right-0 w-[110vw] h-full transition-opacity z-0">
        <Image
          alt="hero"
          src={`/bg-hero${image}.webp`}
          fill
          className="transition-all duration-1000"
        />
      </div>
      <div className="z-1 w-[650px] relative h-full flex flex-col justify-center gap-5 ml-40 text-white">
        <h1 className="text-white text-5xl leading-snug">
          Find the Perfect &nbsp; <i>Freelance</i>
          <br />
          service, right away
        </h1>
        <div className="flex align-middle">
          <input
            type="text"
            className="w-full h-10 rounded-md rounded-r-none p-6 text-black"
            placeholder="Search for any service..."
          />
          <div className="bg-green-500 flex px-6 justify-center items-center rounded-r-md cursor-pointer">
            <IoSearchOutline color="white" size={20} />
          </div>
        </div>
        <div className="flex gap-2">
          <div>Popular:</div>
          <div className="flex gap-3">
            {popularServices.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-sm border rounded-full w-fit px-2 py-1 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
