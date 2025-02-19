import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../Context/Storecontext";
import { food_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalCart, setCartItems, addToCart, removefromCart } =
    useContext(StoreContext);
    const navigate = useNavigate();

     useEffect(() => {
        localStorage.setItem("totalPtice", JSON.stringify(cartItems));
        
      }, []);
  return (
    <>
      {/* Cart */}
      <div className="mt-[150px]">
        {/* Cart-items */}
        <div>
          {/* cart-item-title */}
          <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr]  items-center text-[gray] text-[max(1vw,12px)]">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                // cart-item-title
                <div>
                  <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr]  items-center text-[gray] text-[max(1vw,12px)] my-[10px] mx-[px] font-bold">
                    <img src={item.image} alt="" className="w-[50px]" />

                    <p>{item.name} </p>
                    <p> ₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p> ₹{item.price * cartItems[item._id]}</p>
                    <p onClick={()=>{removefromCart(item._id)}} className="cursor-pointer text-[tomato] text-[29px]">x</p>
                  </div>
                  <hr className="h-[1px] bg-[#e2e2e2]" />
                </div>
              );
            }
          })}
        </div>
        {/* cart-bottom */}
        <div className="mt-[80px] flex justify-between gap-[max(12vw,20px)] w-[80%]">
          {/* cart-total */}
          <div className="flex flex-col gap-[20px] w-full">
            <h2 className=" font-bold text-[21px]">Cart Totals</h2>
            <div>
              {/* cart-total-details */}
              <div className="flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p> ₹{getTotalCart()}</p>
              </div>
              <hr className="my-[10px] mx-[0px]" />
              <div  className="flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p> ₹{getTotalCart()===0?0:20}</p>
              </div>
              <hr className="my-[10px] mx-[0px]" />
              <div  className="flex justify-between text-[#555] ">
                <p className="font-bold">Total</p>
                <p className="font-bold"> ₹{getTotalCart()===0?0:getTotalCart()+20}</p>
              </div>
              
            </div>
            <button className="border-none text-[white] bg-[tomato] w-[max(15vw,200px)] py-[12px] px-[0px] rounded-[4px] cursor-pointer" onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          {/* cart-promocode */}
          <div className="flex-1">
            <p className="text-[#555]">If you have a promo code, Enter it here</p>
            {/* cart-promocode-input */}
            <div className="mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
              <input className="bg-transparent border-none outline-none pl-[10px]" placeholder="promo code" />
              <button className="w-[max(10vw,150px)] py-[12px] px-[5px] bg-[black] border-none text-[white] rounded-[4px]">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
