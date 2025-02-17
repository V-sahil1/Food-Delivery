import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./Context/Storecontext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";


const Clint_id ='23039975917-afvchs3kishatdprkt3i3m1rbljqu9hd.apps.googleusercontent.com'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId={Clint_id }>
  <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </GoogleOAuthProvider>
   
  </BrowserRouter>
);
