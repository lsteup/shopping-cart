import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

import { createContext } from "react";

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const Home = () => {
  useEffect(() => {
    tokenGetter();
  }, []);

  const tokenGetter = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5050/get_access_token",
        {
          auth: {
            username: import.meta.env.VITE_ADMIN_USER,
            password: import.meta.env.VITE_ADMIN_PASS,
          },
        }
      );
      setToken(response.data.access_token);
    } catch (error) {
      console.error(
        "Error getting access token:",
        error.response ? error.response.data : error.message
      );
    }
  };
  const [cart, setCart] = useState([
    { id: "4iWPBUkjEtpk5hzErpq8WA", quantity: 1, price: 25 },
    { id: "2bYCNZfxZrTUv1CHXkz2d2", quantity: 3, price: 36 },
    { id: "0n7dd40ERs4ucG5KarwZxM", quantity: 4, price: 21 },
  ]);

  const [token, setToken] = useState();

  const addToCart = ({ id, quantity, price }) => {
    setCart([...cart, { id: id, quantity, price }]);
    toast("Added To Your Cart");
    console.log(cart);
  };

  const removeFromCart = (item) => {
    const cartItems = cart;
    const newCart = cartItems.filter((album) => album.id !== item);
    setCart(newCart);
  };

  const addItem = (item) => {
    const cartItems = cart;
    setCart(
      cartItems.map((cartItem) => {
        if (cartItem.id === item)
          return {
            id: cartItem.id,
            quantity: cartItem.quantity + 1,
            price: cartItem.price,
          };
        else return cartItem;
      })
    );
  };

  const removeItem = (item) => {
    const cartItems = cart;
    const quantity = cartItems.filter((album) => album.id === item)[0].quantity;
    if (quantity === 1) removeFromCart(item);
    else {
      setCart(
        cartItems.map((cartItem) => {
          if (cartItem.id === item)
            return {
              id: cartItem.id,
              quantity: cartItem.quantity - 1,
              price: cartItem.price,
            };
          else return cartItem;
        })
      );
    }
  };

  const emptyCart = () => {
    setCart([]);
  };
  return (
    <AppContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        emptyCart,
        removeItem,
        addItem,
        token,
      }}
    >
      <div className="min-h-screen bg-gradient-to-r from-sky-50 to-orange-50 flex flex-col justify-between">
        <Navbar />
        <Outlet />
        <Footer></Footer>
      </div>
    </AppContext.Provider>
  );
};
export default Home;
