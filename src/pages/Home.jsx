import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createContext } from "react";

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    toast("item added to cart");
    console.log(cart);
  };
  return (
    <AppContext.Provider value={{ cart: cart, addToCart: addToCart }}>
      <div className="bg-amber-50">
        <Navbar />
        <Outlet />
      </div>
    </AppContext.Provider>
  );
};
export default Home;
