import React from "react";

function Header() {
  return (
    
    <>
    {/* //Header */}
    <div className="bg-[url('/header_img.png')] bg-no-repeat bg-center bg-cover h-[60vh] my-8 mx-auto flex items-end justify-start rounded-2xl mt-[100px]   " id="header">
      {/* heder contant */}
      <div className="ml-[20px] text-white px-[30px] pb-[30px] max-w-[100%]  xl:max-w-[50%] opacity-0 animate-[fadeIn_1.5s_ease-in-out_forwards] ">
        
        <h2 className=" flex    font-bold  md:text-[40px] xl:text-[50px]" >Order your favorite food here!</h2>
     
       
        <p className=" ">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time </p>
        <button className="bg-white text-[#353535] border-2 md:w-[40%] w-[30%] rounded-2xl my-[20px] h-[40px]">View Menu </button>
      </div>
    </div>
    </>
  );
}

export default Header;
