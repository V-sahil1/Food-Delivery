import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { use } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/Storecontext';
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
function Navbar({setShowlogin}) {
  const [menu,setMenu] =useState('menu');
  const {getTotalCart} =useContext(StoreContext)
  return (
    <>
    <div className='flex px-[20px] top-[0%] mx-[-6px]    items-center justify-between   h-[100px]  fixed bg-[white] w-full  z-[999] shadow-xl ' id ='navbar'>
 
        <img src={assets.logo} alt=""  className='xl:w-[150px] logo'/>
        <div className='hidden md:flex'>
        <ul className='flex m-2 gap-5 text-[#49557e] text-[18px] navbar-menu '>
          <Link to='/'>
          <li  className="hover:underline cursor-pointer ">Home</li></Link>
         
           <a  href='#explore-menu' className="hover:underline cursor-pointer ">Menu</a>
           
            <a href='#app-download' className="hover:underline cursor-pointer ">MobileApp</a>
            <a href="/contact-us">ContactUs</a>
            
            
        </ul>
        </div>
        
        <div className='flex items-center xl:gap-[40px]   navbar-right '>
            <IoIosSearch className=' text-[30px]' /> 
            <div className='relative navbar-search-icon '>
              <Link to='cart'>
              <FaShoppingCart alt=""  className='text-[30px]' />
              </Link>
                
                <div className={getTotalCart()===0?"":"absolute bg-[tomato] min-h-[10px] min-w-[10px] rounded-xl -top-2 -right-2"}>
              
                </div>
                
                 
            </div>
          
            {/*  */}
            <button onClick={()=>setShowlogin(true)}  className='border   text-[16px] pt-[10px] pb-[10px] pl-[30px] pr-[30px]  w-[120px] rounded-2xl mx-6  hover:bg-[#fff4f2]'> Sign in</button>
           
            
        </div>
    </div>

    
    </>
    
  )
}

export default Navbar