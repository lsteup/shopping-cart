import { useContext, useEffect } from "react";
import { useAppContext } from "./Home";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import cartImg from "/Users/louisasteup/Desktop/shopping-cart/src/images/cart.jpg";
import Title from "../components/Title";

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
    <div className="bg-orange-50 p-4 flex flex-col justify-around h-4/5">
      <ToastContainer />
      <Title
        title="Your Shopping Bag"
        text="Ready to spin some new tunes? Review your selections and proceed to checkout to complete your purchase."
      />

      <div className="flex justify-around">
        <div className="border p-8 border-zinc-950 rounded-md grow max-w-xl ">
          <div>
            {" "}
            {cart.map((item) => {
              return (
                <CartItem
                  quantity={item.quantity}
                  item={item.id}
                  key={item.id}
                />
              );
            })}
          </div>
          <div className="flex justify-between items-center border-t pt-4 border-zinc-900">
            <div>
              <p
                className="bg-zinc-300 border border-zinc-900 rounded p-2 hover:bg-zinc-400 "
                onClick={() => emptyCart()}
              >
                empty cart
              </p>
            </div>
            <div className="text-end">
              <p className="text-zinc-500 text-lg">{totalItems} items</p>
              <p className="font-semibold text-lg">
                total price:{" "}
                <span className="text-orange-700">{totalPrice} € </span>
              </p>
            </div>
          </div>
          <button
            className="hover:bg-orange-800 mx-auto text-lg font-semibold bg-orange-500 p-2 border border-zinc-950 rounded text-zinc-50 drop-shadow-sm w-80 mt-4"
            onClick={() =>
              toast.success("order placed (functionality not in place)")
            }
          >
            Go To Checkout
          </button>
        </div>
        <img className="hidden lg:block max-w-xl" src={cartImg} alt="" />
      </div>
    </div>
  );
};
export default Cart;
