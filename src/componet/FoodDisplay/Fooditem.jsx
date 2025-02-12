import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/Storecontext'

function Fooditem({id,name,price, description,image}) {
   const [itemCount,setCount] =useState(0)
   const {cartItems, addToCart, removefromCart}=useContext(StoreContext)
  return (
    <>
    {/* food-item */}
     <div className='w-[100%] m-auto rounded-[15px] animation-n shadow-[0px_0px_10px_#00000015]'>
      {/* food-item-img-container */}
      <div className='p-[20px] relative  '>
        {/* food-item-image */}
        <img src={image} alt=""  className='w-[100%] rounded-t-[15px] rounded-b-[0px]'/>
        {!cartItems[id]
        // add
        ? <img src={assets.add_icon_white} onClick={()=>addToCart(id)} alt="" className='absolute w-[35px] bottom-[25px] right-[25px] cursor-pointer rounded-[50%]    ' /> :
        // food-item-counter
        <div className='flex items-center justify-between p-3 mt-3'>
          <img src={assets.remove_icon_red} className='cursor-pointer' onClick={()=>removefromCart(id)} alt="" />
          <p className='font-semibold text-[20px]'>{cartItems[id]}</p>
          <img src={assets.add_icon_green} onClick={()=>addToCart(id)} className='cursor-pointer' alt="" />
        </div>
      }
      </div>
      {/* food-item-info   */}
      <div className='p-[20px]'>
        {/* food-item-nampxrating */}
        <div className='flex justify-between items-center mb-[10px]'>
          <p className='text-[20px] font-[500 ]'>{name}</p>
          <img src={assets.rating_starts} alt="" className='w-[70px]' />
      </div>
      {/* food-item-desc */}
      <div >
      <p className='text-[#676767]' >{description}</p>
      {/* food-item-price */}
      <p className='text-[tomato] text-[22px] font-[500] mt-[10px] mb-[0px]'>${price}</p>
      </div>
     
      </div>

     </div>
     </>
   
  )
}

export default Fooditem