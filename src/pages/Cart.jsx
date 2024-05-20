import { useContext, useEffect } from "react";
import { useAppContext } from "./Home";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, emptyCart } = useAppContext();
  const totalItems = cart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
  const totalPrice = cart.reduce((accumulator, item) => {
    return accumulator + item.quantity * item.price;
  }, 0);
  console.log(totalPrice);

  if (cart.length === 0) return <div>no items found</div>;
  return (
    <div>
      <div>Cart</div>
      {cart.map((item) => {
        return (
          <CartItem quantity={item.quantity} item={item.id} key={item.id} />
        );
      })}
      <p>total: {totalItems} </p>
      <p>total price: {totalPrice} </p>
      <p onClick={() => emptyCart()}>empty cart</p>
      <button>place order</button>
    </div>
  );
};
export default Cart;
