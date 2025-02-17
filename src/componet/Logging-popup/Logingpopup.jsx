import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Loging from "./Loging";


function Logingpopup({ setShowlogin }) {
  const [currState, setCurrState] = useState("Login");
  return (
    <>
      {/* login-popup */}
      <div className="absolute z-[9999999] w-full h-full bg-[#00000090] grid ">
        {/* login-popup-container */}
        <form className="place-self-center text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animatio " >
          {/* login-popup-title */}
          <div className=" flex justify-between items-center text-[black] font-bold text-[20px]">
            <h2>{currState}</h2>
            <img
              onClick={() => setShowlogin(false)}
              src={assets.cross_icon}
              alt="" className="w-[16px] cursor-pointer"
            />
          </div>
          {/* login-popup-inputs */}
          
          <Loging />
          
          
          <button className="border-none p-[10px]  rounded-[4px] text-[white] bg-[tomato] text-[15px] cursor-pointer">{currState==="Sign Up"?"Create account":"Login"}</button>
          {/* login-popup-condition */}
          <div className="flex justify-center items-start gap-[8px] mt-[-15px] " >
            <input type="checkbox" required className="mt-[4px]" />
            <p className="items-center"> By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
          {currState==="Login"?<p>Create a new account? <span className=" text-[tomato] font-[500] cursor-pointer" onClick={()=>setCurrState("Sign Up")}>Click here </span></p>:<p>Already have an account? <span onClick={()=>setCurrState("Login")} className=" text-[tomato] font-[500] cursor-pointer">Login here</span></p>}
          
          
        </form>
      </div>
    </>
  );
}

export default Logingpopup;
