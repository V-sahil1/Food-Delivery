import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { use } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/Storecontext';

function Navbar({setShowlogin}) {
  const [menu,setMenu] =useState('menu');
  const {getTotalCart} =useContext(StoreContext)
  return (
    <>
    <div className='flex p-[20px]   border  items-center justify-between  mt-3 h-[100px] navbar ' id ='navbar'>
 
        <img src={assets.logo} alt=""  className='w-[150px] logo'/>
        <div className=''>
        <ul className='flex m-2 gap-5 text-[#49557e] text-[18px] navbar-menu '>
          <Link to='/'>
          <li  className="hover:underline cursor-pointer ">home</li></Link>
         
           <a  href='#explore-menu' className="hover:underline cursor-pointer ">menu</a>
           
            <a href='#app-download' className="hover:underline cursor-pointer ">mobile-app</a>
            <a href='#footer' className="hover:underline cursor-pointer ">contact-us</a>
        </ul>
        </div>
        
        <div className='flex items-center gap-[40px] navbar-right '>
            <img src={assets.search_icon} alt="" />
            <div className='relative navbar-search-icon '>
              <Link to='cart'>
              <img src={assets.basket_icon} alt=""  />
              </Link>
                
                <div className={getTotalCart()===0?"":"absolute bg-[tomato] min-h-[10px] min-w-[10px] rounded-xl -top-2 -right-2"}>
              
                </div>
                
                 
            </div>
            <button onClick={()=>setShowlogin(true)} className='border   text-[16px] pt-[10px] pb-[10px] pl-[30px] pr-[30px]  w-[120px] rounded-2xl mx-6  hover:bg-[#fff4f2]'> sign in</button>
        </div>
    </div>

    
    </>
    
  )
}

export default Navbar