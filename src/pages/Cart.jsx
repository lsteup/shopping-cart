import { useContext, useEffect } from "react";
import { useAppContext } from "./Home";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import cartImg from "/Users/louisasteup/Desktop/shopping-cart/src/images/cart.jpg";
import Title from "../components/Title";
import Deliveries from "../components/Deliveries";

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
    <div className=" p-4 px-16 flex flex-col justify-around h-4/5">
      <ToastContainer />
      <Title
        title="Your Cart"
        text="Ready to spin some new tunes? Review your selections and proceed to checkout to complete your purchase."
      />
      <p className="text-center underline text-sm font-light text-zinc-800 hover:text-black hover:font-normal mb-16">
        Continue Shopping
      </p>
      <div className="grid grid-cols-6 justify-center place-content-start max-w-4xl ">
        <p className="col-span-3 uppercase">product</p>
        <p className="uppercase">price</p>
        <p className="uppercase">amount</p>
        <p className="uppercase">total</p>
        <div className="grid col-span-6 border-y-2  my-6 py-6 ">
          {cart.map((item) => {
            return (
              <CartItem quantity={item.quantity} item={item.id} key={item.id} />
            );
          })}
        </div>
      </div>
      <div className="max-w-3xl ">
        <div className="grid border p-8 border-zinc-950 rounded-md grow max-w-xl mx-auto">
          <div className="flex justify-between items-center pt-4 border-zinc-900">
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
                Subtotal:{" "}
                <span className="text-orange-700">{totalPrice} € </span>
              </p>
              <p>Taxes included. Shipping calculated at checkout.</p>
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
      <Deliveries />
    </div>
  );
};
export default Cart;
