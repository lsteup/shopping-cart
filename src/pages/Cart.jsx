import { useContext, useEffect } from "react";
import { useAppContext } from "./Home";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useAppContext();
  console.log(cart);
  return (
    <div>
      <div>Cart</div>
      {cart.map((item) => {
        return <CartItem item={item} />;
      })}
      <p>empty cart</p>
      <button>place order</button>
    </div>
  );
};
export default Cart;
