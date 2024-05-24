import axios from "axios";
import { useState, useEffect } from "react";
import { useAppContext } from "../pages/Home";
import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";

const CartItem = ({ item }) => {
  const [album, setAlbum] = useState();
  const [loading, setIsLoading] = useState(true);

  const { cart, removeFromCart, removeItem, addItem, token } = useAppContext();
  const apiKey = token;
  const quantity = cart.filter((cartItem) => cartItem.id === item)[0].quantity;

  const fetchAlbum = async () => {
    const config = {
      method: "get",
      url: `https://api.spotify.com/v1/albums/${item}`,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };

    try {
      const response = await axios(config);
      const album = response.data;
      const cartItems = cart;
      const price = cartItems.filter((cartItem) => cartItem.id === album.id)[0]
        .price;

      setAlbum({
        ...album,
        quantity,
        price,
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchAlbum();
  }, []);

  if (loading) return <div>loading</div>;
  if (!loading) {
    const img = album.images[1].url;
    const name = album.name;
    const artist = album.artists[0].name;
    return (
      <div>
        <div className=""></div>
        <div className="hidden md:grid grid-cols-6  my-4  font-light text-xs md:text-base items-center">
          <div className="col-span-3 flex gap-6 items-center">
            <img
              className="border border-zinc-950 aspect-square shrink-0 max-w-32"
              src={img}
              alt=""
            />
            <div className="">
              <p className="font-semibold ">
                {artist} - {name}
              </p>
              <p
                onClick={() => removeFromCart(item)}
                className="font-light underline font-sm"
              >
                remove
              </p>
            </div>
          </div>
          <p className=" ">€{album.price},00</p>
          <div className="justify-start leading-3 flex h-7  items-center gap-2">
            <p onClick={() => removeItem(item)} className="text-2xl">
              <GrSubtractCircle size="1em" />
            </p>
            <p className=" ">{quantity}</p>
            <p className="text-2xl" onClick={() => addItem(item)}>
              <IoAddCircleOutline size="1.2em" />
            </p>
          </div>
          <p className="">€ {quantity * album.price},00</p>
        </div>
      </div>
    );
  }
};
export default CartItem;
