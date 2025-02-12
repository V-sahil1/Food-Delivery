import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componet/Header";
import Navbar from "./componet/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Placeorder from "./Pages/Placeyourorder/Placeorder";
import Footer from "./componet/footer/Footer";
import { useState } from "react";
import Logingpopup from "./componet/Logging-popup/Logingpopup";
import FoodDisplay from "./Context/FoodDisplay";
import Fooditem from "./componet/FoodDisplay/Fooditem";
import Privacy from "./componet/privacy/Privacy";

function App() {
  const[showLogin,setShowlogin]=useState(false)
  return (
    <>
    {showLogin?<Logingpopup setShowlogin={setShowlogin}/>:<></>}
      <div className="w-[80%] m-auto">
        <Navbar setShowlogin={setShowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />}
           />
           <Route path="/menu" element={<FoodDisplay/>}
           />
            <Route path="/privacy-policy" element={<Privacy/>}
           />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
