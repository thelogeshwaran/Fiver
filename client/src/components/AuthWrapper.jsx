import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import React, { useState } from "react";

function AuthWrapper() {
  const [{ showLoginModal, showSignupModal }, dispatch] = useStateProvider();
  const [values, setValues] = useState({ email: "", password: "" });
  console.log("values", values);

  const handleChange = (e) => {
    setValues({ ...values, [e?.target?.name]: e?.target?.value });
  };
  return (
    <div className="fixed z-40 top-0">
      <div className="h-[100vh] w-[100vw] backdrop-filter-md fixed top-0"></div>
      <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center backdrop-blur-md">
        <div className="fixed z-[50] h-max w-max bg-white flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-center items-center p-8 gap-7 ">
            {showLoginModal ? (
              <div className="text-gray-400">Login to Fiverr</div>
            ) : (
              <div className="text-gray-400">Signup to Fiverr</div>
            )}
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="border border-slate-300 p-3 w-80"
              value={values.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border border-slate-300 p-3 w-80"
              value={values.password}
              onChange={handleChange}
            />
            <button className="bg-[#1cbf73] text-white p-3 w-80 font-semibold rounded-md">
              Continue
            </button>
            <div className="w-80 border-t border-slate-400"></div>
            {showLoginModal ? (
              <div className="text-slate-500">
                Not a member yet ?{" "}
                <span
                  className="text-[#1cbf73] cursor-pointer"
                  onClick={() => {
                    dispatch({
                      type: reducerCases.TOGGLE_SIGNUP_MODAL,
                      showSignupModal: true,
                    });
                    dispatch({
                      type: reducerCases.TOGGLE_LOGIN_MODAL,
                      showLoginModal: false,
                    });
                  }}
                >
                  Join Now
                </span>
              </div>
            ) : (
              <div className="text-slate-500">
                Already a member?{" "}
                <span
                  className="text-[#1cbf73] cursor-pointer"
                  onClick={() => {
                    dispatch({
                      type: reducerCases.TOGGLE_LOGIN_MODAL,
                      showLoginModal: true,
                    });
                    dispatch({
                      type: reducerCases.TOGGLE_SIGNUP_MODAL,
                      showSignupModal: false,
                    });
                  }}
                >
                  Login Now
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;
