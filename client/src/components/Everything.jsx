import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";

function Everything() {
  const everythingData = [
    {
      title: "Stick to your budget",
      subtitle:
        "Find the right service for every price point. No hourly rates, just project-based pricing.",
    },
    {
      title: "Get quality work done quickly",
      subtitle:
        "Hand your project over to a talented freelancer in minutes, get long-lasting results.",
    },
    {
      title: "Pay when you're happy",
      subtitle:
        "Upfront quotes mean no surprises. Payments only get released when you approve.",
    },
    {
      title: "Count on 24/7 support",
      subtitle:
        "Our round-the-clock support team is available to help anytime, anywhere.",
    },
  ];
  return (
    <div className="flex justify-between bg-[#f0fdf7] px-24 py-20 items-center">
      <div className="w-2/5">
        <div className="text-3xl mb-5 font-bold text-[#404145]">
          The best part? Everything
        </div>
        <ul className="flex flex-col gap-8">
          {everythingData.map((item, index) => {
            return (
              <li key={index}>
                <div className="flex items-center gap-2 text-xl">
                  <BsCheckCircle color="#63646a" />
                  <div>{item.title}</div>
                </div>
                <div className="text-[#63646a]">{item.subtitle}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="h-96 w-2/4 relative">
        <Image src={"/everything.webp"} fill />
      </div>
    </div>
  );
}

export default Everything;
