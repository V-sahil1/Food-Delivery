import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  function handletofb(){
    <a href="https://www.linkedin.com/feed/"></a>
  }
  return (
    <>
      {/* footer */}
      <div className=" text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw] pt-[80px] mt-[100px] " id="footer">
        {/* footer-content */}
        <div className=" w-[100%] grid grid-cols-[2fr,1fr,1fr]  gap-[80px] ">
          {/* footer-contant-left */}
          <div className=" flex-cols items-start gap-[20px]">
            <img src={assets.logo} alt="" />
            <p className="mt-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              asperiores rem, debitis eum vero earum mollitia 
            </p>
            {/* footer-social-icons */}
            <div className="flex mt-[20px] w-[40px] mr-[15px] gap-3 cursor-pointer ">
          
              <img src={assets.facebook_icon} alt="" href="https://www.linkedin.com/feed/" /> 
              
             
                
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon}  alt="" />

            </div>
            <div className=" mt-[2px]">
            <a className="pr-[20px] ml-[9px]" href="https://www.facebook.com/" >
                  fb</a>
                <a className="mx-[20px] mt-[]"  href="https://x.com/?lang=en" >
                X</a><a className="mx-[3px]" href="https://www.linkedin.com/feed/" >
                Linkedin</a>
            </div>
             
          </div>
          {/* footer-content-center */}
          <div className="flex-cols items-start gap-[20px]">
            <h2 className="font-bold text-[20px] text-[white]">COMPANY</h2>
            <ul className="" >
              
              <a href="#navbar" className="mt-[10px] cursor-pointer">Home</a>
             
               
                <li className="mt-[10px] cursor-pointer">About us</li>
                <li className="mt-[10px] cursor-pointer mb-[10px]">Delivery</li>
                
                <a href="/privacy-policy" className="mt-[10px] cursor-pointer">Privacy Policy</a>
            </ul>
          </div>
          {/* footer-content-right */}
          <div className="flex-cols items-start gap-[20px]">
            <h2 className="font-bold text-[20px] text-[white] ">GET IN TOUCH</h2>
            <ul >
                <li className="mt-[10px]">+1-212-456-7890</li>
                <li className="mt-[10px]">sahilvardekar89@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr className="w-[100%] h-[2px] my-[20px] mx-[0px] bg-gray-500 border-none" />
        {/* footer-copyright */}
        <p className="">
            copyright 2025 &copy; Tomato.com -All Right Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
