import React from "react";
import { GoogleLogin } from "@react-oauth/google";



function Loging() {

  return (
    <>
      <GoogleLogin
        onSuccess={(crandetialResp) => {
          console.log(crandetialResp)
          
        }}
        onError={() => console.log("login failed")}
      />
    </>
  );
}

export default Loging;
