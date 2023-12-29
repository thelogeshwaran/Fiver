import React from "react";

function AuthWrapper() {
  return (
    <div className="fixed z-40 top-0">
      <div className="h-[100vh] w-[100vw] backdrop-filter-md fixed top-0"></div>
      <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
        <div className="fixed z-[50] h-max w-max bg-white flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-center items-center p-8 gap-7 ">
            <div className="text-gray-400">Login to Fiverr</div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="border border-slate-300 p-3 w-80"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border border-slate-300 p-3 w-80"
            />
            <button className="bg-[#1cbf73] text-white p-3 w-80 font-semibold rounded-md">
              Continue
            </button>
            <div className="w-80 border-t border-slate-400"></div>
            <div className="text-slate-500">
              Not a member yet ?{" "}
              <span className="text-[#1cbf73] cursor-pointer">Join Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;
