import { useContext } from "react";
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
    </div>
  );
};
export default Cart;
