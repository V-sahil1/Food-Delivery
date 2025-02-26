import React, { useContext, useState, useMemo } from "react";
import { StoreContext } from "../../Context/Storecontext";
import { QRCodeSVG } from "qrcode.react";
import Swal from 'sweetalert2';
function Placeorder() {
  const onSubmit = async (event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
      
          formData.append("access_key", "f6b0d5ef-fe62-46ef-a86e-74868633d95f");
      
          const object = Object.fromEntries(formData);
          const json = JSON.stringify(object);
      
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          }).then((res) => res.json());
      
          if (res.success) {
              Swal.fire({
                  title: "Success!",
                  text: "Message sent successfull!",
                  icon: "success"
                });
          }
        };
  const { getTotalCart } = useContext(StoreContext);

  const getActualPrice = getTotalCart();

  const [showQR, setShowQR] = useState(false);

  const handlePayment = () => {
    setShowQR(true);
  };
  return (
    <div >
      {/* place-order */}
      <form className="flex items-start justify-between gap[50px] mt-[120px]" onSubmit={onSubmit}>
        {/* place-order-left */}
        <div className="w-full max-w-[max(30%,500px)]">
          {/* title */}
          <p className="text-[30px] font-[600] mb-[50px] ">
            Delivery Information
          </p>
          {/* multi-fields */}
          <div onSubmit={onSubmit}>
          <div className="flex gap-[10px]">
            <input className="i" type="text" placeholder="First name" name="First name" required/>
            <input className="i" type="text" placeholder="Last name" name="Last name" required />
          </div>
          <input type="email" name="email" className="i" placeholder="email address"  required/>
          <input type="text" className="i" placeholder="Street" name="Street" required />
          <div className="flex gap-[10px]">
            <input type="text" className="i" placeholder="City" name="City" required />
            <input type="text" className="i" placeholder="State" name="State" required />
          </div>
          <div className="flex gap-[10px]">
            <input type="text" className="i" placeholder="Zip Code" name="Zip Code" required />
            <input type="text" className="i" placeholder="Country" name="Country" required />
          </div>
          <input type="text" className="i" placeholder="Phone" name="Phone" required />
          <button className="w-[100%] font-[400] h-[50px] border bg-[tomato] rounded-[4px] text-[white] text-[20px] ">Submit</button>
          </div>
        </div>
        {/* place-order-right */}
        <div className="w-full max-w-[max(40%,500px)]">
          <div className="flex flex-col gap-[20px] w-full">
            <h2 className=" font-bold text-[21px]">Cart Totals</h2>
            <div>
              {/* cart-total-details */}
              <div className="flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p> ₹{getTotalCart()}</p>
              </div>
              <hr className="my-[10px] mx-[0px]" />
              <div className="flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p> ₹{getTotalCart() === 0 ? 0 : 20}</p>
              </div>
              <hr className="my-[10px] mx-[0px]" />
              <div className="flex justify-between text-[#555] ">
                <p className="font-bold">Total</p>
                <p className="font-bold">
                   ₹{getTotalCart() === 0 ? 0 : getTotalCart() + 20}
                </p>
              </div>
            </div>
           
          </div>
        </div>
        
      </form>
      <button
              className="absolute sm:right-[23%]  xl:right-[27.9%] top-[40%] border-none text-[white] bg-[tomato] w-[max(15vw,200px)] py-[12px] px-[0px] rounded-[4px] cursor-pointer mt-[30px]"
              onClick={handlePayment}
            >
              PROCEED TO PAYMENT
            </button>

      {showQR && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center flex flex-col items-center">
            <h2 className="text-lg font-bold text-black mb-4">
              Scan QR Code to Pay  ₹{getActualPrice === 0 ? 0 : getTotalCart() + 20}
            </h2>
            <QRCodeSVG
              value={`upi://pay?pa=tomato1256@upi&pn=sahil&am=${getActualPrice === 0 ? 0 : getTotalCart() + 20}&cu=INR&tn=Tomato`}
            />

            <button
              className="
               mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setShowQR(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Placeorder;
