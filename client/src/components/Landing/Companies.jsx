import Image from "next/image";
import React from "react";

function Companies() {
  const list = [1, 2, 3, 4, 5];
  return (
    <div className="flex justify-center items-center text-gray-500 text-1xl font-bold min-h-[11vh] bg-[#f5f5f5]">
      Trusted by: &nbsp;
      <ul className="flex gap-10 ml-10">
        {list.map((item, id) => (
          <li key={id} className="relative h-[4.5rem] w-[4.5rem]">
            <Image alt="trusted companies" fill src={`/trusted${item}.png`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Companies;
