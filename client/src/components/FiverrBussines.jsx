import Image from "next/image";
import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import FiverLogo from "./FiverLogo";

function FiverrBussines() {
  return (
    <div className="flex px-20 py-16 bg-[#0d074d] text-white">
      <div>
        <div className="flex gap-2">
          <FiverLogo fillColor={"#ffff"} />
          <div className="text-xl">Business Solutions</div>
        </div>
        <div className="text-3xl font-bold my-3 w-2/4">
          Advanced solutions and professional talent for business
        </div>
        <ul className="flex flex-col gap-5 w-3/4 mt-8">
          <li className="flex items-center gap-3">
            <BsFillPatchCheckFill color="#b2abff" size={25} />
            <div>
              <div className="font-bold ">Firver Pro</div>
              <div>
                Access top freelancers and professional business tools for any
                project
              </div>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <BsFillPatchCheckFill color="#b2abff" size={25} />
            <div>
              <div className="font-bold ">Fiverr Certified</div>
              <div>Build your own branded marketplace of certified experts</div>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <BsFillPatchCheckFill color="#b2abff" size={25} />
            <div>
              <div className="font-bold ">Fiverr Enterprise</div>
              <div>
                Manage your freelance workforce and onboard additional talent
                with an end-to-end SaaS solution
              </div>
            </div>
          </li>
        </ul>
        <button className="bg-[#ffffff] text-black p-2 px-3 my-3 rounded-md">
          Learn more
        </button>
      </div>
      <div className="relative h-512px w-2/3">
        <Image src="/business.webp" fill />
      </div>
    </div>
  );
}

export default FiverrBussines;
