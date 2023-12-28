import { categories } from "@/utils/categories";
import Image from "next/image";
import React from "react";

function Services() {
  return (
    <div className="flex mx-20 flex-col my-16 gap-5">
      <div className="text-4xl">You need it, we've got it</div>
      <div>
        <ul className="grid grid-cols-5 gap-10">
          {categories.map((item, index) => {
            return (
              <li className="flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl border-white hover:border-[#1cbf73] border-2 p-5 transition-all duration-500">
                <Image src={item.logo} height={50} width={50} />
                <div>{item.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Services;
