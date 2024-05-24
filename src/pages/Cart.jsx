import { useContext, useEffect } from "react";
import { useAppContext } from "./Home";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import Title from "../components/Title";
import Deliveries from "../components/Deliveries";
import { Link } from "react-router-dom";
import CartItemThumb from "../components/CartItemThumb";

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
      <div className=" p-4  flex flex-col justify-around h-4/5 w-5/6 mx-auto">
        <ToastContainer />
        <Title
          title="Your Cart"
          text="Ready to spin some new tunes? Review your selections and proceed to checkout to complete your purchase."
        />
        <Link
          to="/"
          className="text-center underline text-sm font-light text-zinc-800 hover:text-black hover:font-normal mb-16"
        >
          Continue Shopping
        </Link>
        <div className="md:hidden flex flex-col gap-4 mb-4">
          {cart.map((item) => {
            return (
              <CartItemThumb
                quantity={item.quantity}
                item={item.id}
                key={item.id}
              />
            );
          })}
        </div>
        <div className="hidden md:grid grid-cols-6 justify-center place-content-start max-w-4xl ">
          <p className="col-span-3 uppercase">product</p>
          <p className="uppercase">price</p>
          <p className="uppercase">amount</p>
          <p className="uppercase">total</p>
          <div className="grid col-span-6 border-y-2  my-6 py-6 ">
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
        </div>
        <div className="bg-zinc-100 p-6 border border-black flex flex-col gap-4">
          <div className="flex justify-between text-sm font-light">
            <p className="font-semibold">Subtotal:</p>
            <p className="font-bold">€ {totalPrice},00</p>
          </div>
          <div className="flex justify-between text-sm font-light">
            <p className="font-semibold">Quantity:</p>
            <p className="">{totalItems} items</p>
          </div>
          <p>Taxes included. Shipping calculated at checkout.</p>
          <div
            className="border-4 border-orange-500 p-2 text-center"
            onClick={() =>
              toast.success("order placed (functionality not in place)")
            }
          >
            Go To Checkout
          </div>
        </div>
      </div>
      <Deliveries />
    </div>
  );
};
export default Cart;
