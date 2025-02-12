import React from 'react'
import { menu_list } from "../../assets/assets"

function Exploremenu({category,setCategory}) {
  return (
        // explore menu
    <div className='' id='explore-menu'>
        <h1 className='font-bold text-[29px] text-[#262626]'>Explore Menu</h1>
        {/* explore-menu-text */}
        <p className='mt-4  mb-7 max-w-[60%] text-[#808080]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        {/* explore-menu-list */}
        <div className='flex  justify-between items-center my-[20px] mx-[0px] gap-[30px] overflow-x-scroll  ex'>
            {menu_list.map((item,index)=>{
                return(
                    // explore-menu-list-item
                    <div  key ={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className=' hover:cursor-pointer list '>
                        <img  src={item.menu_image} alt="" className={`md:h-[60%] h-[80px]   md:w-[100%] xl:w-[90%] xl:h-[75%] min-w-[80px] rounded-full ${category === item.menu_name ? "active" : ""}`}
                        />
                        <p className='  mt-3 mx-[8px] xl:mx-[30px] text-[#747474]'>{item.menu_name}</p>
                    </div>
                
                )
            }) }
        </div>
        <hr className='border-none my-[10px h-[2px] bg-[#e2e2e2]' />    
    </div>
  )
}

export default Exploremenu