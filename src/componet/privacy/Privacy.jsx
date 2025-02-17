import React from "react";

function Privacy() {
  return (
    <>
      <div className=" m-[10px]  py-[10px]">
        <h1 className=" text-[50px] font-extrabold">Privacy Policy</h1>
        <p className="mt-[12px]">
          Welcome to <b>Tomato!</b> Your privacy is important to us. This
          Privacy Policy explains how we collect, use, and protect your
          information when you use our app.
        </p>
        <div className="mt-[12px]">
          <h2 className="text-[25px] font-bold">1. Information We Collect</h2>
          <ul className="px-[20px] mt-[10px]">
            <li>● Personal details (name, email, phone number, address)</li>
            <li>● Payment information (processed securely)</li>
            <li>● Order history and preferences</li>
            <li>● Device and usage data </li>
          </ul>
        </div>
        <div className="mt-[12px]">
          <h2 className="text-[25px] font-bold">
            2. How We Use Your Information
          </h2>
          <ul className="px-[20px] mt-[10px]">
            <li>● To process orders and deliveries</li>
            <li>● To improve our services and user experience</li>
            <li>● To send updates and promotional offers</li>
            <li>● To ensure security and prevent fraud </li>
          </ul>
        </div>
        <div className="mt-[12px]">
          <h2 className="text-[25px] font-bold">
          3. How We Share Your Information
          </h2>
          <ul className="px-[20px] mt-[10px]">
            <li>● With delivery partners and restaurants to fulfill orders</li>
            <li>● With payment providers for transactions</li>
            <li>● With legal authorities if required by law</li>
          </ul>
        </div>
         <div className="mt-[12px]">
          <h2 className="text-[25px] font-bold">
          4. Your Rights
          </h2>
          <ul className="px-[20px] mt-[10px]">
            <li>● You can update or delete your account information</li>
            <li>● You can opt out of marketing communications</li>        
          </ul>
        </div>
        <div className="mt-[12px]">
          <h2 className="text-[25px] font-bold">
          5. Data Security
          </h2>
          <ul className="px-[20px] mt-[10px]">
            <li>We take reasonable steps to protect your data but cannot guarantee complete security.</li>
                
          </ul>
        </div>
        <div className="mt-[12px]">
          <h2 className="text-[25px] font-bold">
          6. Changes to This Policy
          </h2>
          <ul className="px-[20px] mt-[10px]">
            <li>● We may update this policy from time to time. Continued use of our app means you accept the updated policy.</li>
                
          </ul>
        </div>
        <div className="mt-[12px]">
          <h2 className="text-[25px] font-bold">
          7. Contact Us
          </h2>
          <ul className="px-[20px] mt-[10px]">
            <li>● For any privacy concerns, contact us at <span className="text-[blue]">sahilvardekar89@gmail.com</span></li>
                
          </ul>
        </div>
      </div>
    </>
  );
}

export default Privacy;
