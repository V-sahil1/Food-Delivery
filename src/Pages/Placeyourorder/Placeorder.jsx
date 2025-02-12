import React, { useContext } from 'react'
import { StoreContext } from '../../Context/Storecontext'

function Placeorder() {
  const {getTotalCart}=useContext(StoreContext)
  return (
    <div>
      {/* place-order */}
      <form className='flex items-start justify-between gap[50px] mt-[100px]'>
        {/* place-order-left */}
        <div className='w-full max-w-[max(30%,500px)]'>
          {/* title */}
          <p className='text-[30px] font-[600] mb-[50px] '>Delivery Information</p>
          {/* multi-fields */}
          <div className='flex gap-[10px]' >
            <input className='i' type="text" placeholder='First name' />
            <input className='i' type="text" placeholder='Last name'/>
          </div>
          <input type="email" className='i' placeholder='email address'/>
          <input type="text" className='i' placeholder='Street' />
          <div className='flex gap-[10px]' >
            <input type="text" className='i' placeholder='City' />
            <input type="text" className='i' placeholder='State'/>
          </div>
          <div className='flex gap-[10px]' >
            <input type="text" className='i' placeholder='Zip Code' />
            <input type="text" className='i' placeholder='Country'/>
          </div> 
          <input type="text" className='i' placeholder='Phone'/>
        </div>
        {/* place-order-right */}
        <div className='w-full max-w-[max(40%,500px)]'>
        <div className="flex flex-col gap-[20px] w-full">
            <h2 className=" font-bold text-[21px]">Cart Totals</h2>
            <div>
              {/* cart-total-details */}
              <div className="flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>${getTotalCart()}</p>
              </div>
              <hr className="my-[10px] mx-[0px]" />
              <div  className="flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>${getTotalCart()===0?0:2}</p>
              </div>
              <hr className="my-[10px] mx-[0px]" />
              <div  className="flex justify-between text-[#555] ">
                <p className="font-bold">Total</p>
                <p className="font-bold">${getTotalCart()===0?0:getTotalCart()+2}</p>
              </div>
              
            </div>
            <button className="border-none text-[white] bg-[tomato] w-[max(15vw,200px)] py-[12px] px-[0px] rounded-[4px] cursor-pointer mt-[30px]" >PROCEED TO  PAYMENT</button>
          </div> 
        </div>

      </form>
    </div>
  )
}

export default Placeorder