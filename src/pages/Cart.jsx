import { useContext, useEffect } from "react";
import { useAppContext } from "./Home";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, emptyCart } = useAppContext();

  if (cart.length === 0) return <div>no items found</div>;
  return (
    <div>
      <div>Cart</div>
      {cart.map((item) => {
        return (
          <CartItem quantity={item.quantity} item={item.id} key={item.id} />
        );
      })}
      <p>total: </p>
      <p>total price: </p>
      <p onClick={() => emptyCart()}>empty cart</p>
      <button>place order</button>
    </div>
  );
};
export default Cart;
