import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useAppContext } from "../pages/Home";
import { GrSubtractCircle } from "react-icons/gr";
import { IoAddCircleOutline } from "react-icons/io5";

const CartItemThumb = ({ item }) => {
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
    if (token) {
      setIsLoading(true);
      fetchAlbum();
    }
  }, [token]);

  console.log(album);

  if (loading) return <div>loading</div>;
  if (!loading) {
    const img = album.images[1].url;
    const name = album.name;
    const artist = album.artists[0].name;

    return (
      <div className="bg-zinc-100 p-6 border border-black flex flex-col gap-4">
        <div className="flex justify-between">
          <img className="max-w-24" src={img} alt="" />

          <IoMdClose onClick={() => removeFromCart(item)} />
        </div>
        <div className="flex justify-between text-xs font-light">
          <p>Product:</p>

          <div>
            <p className="font-normal">{artist}</p>
            <p className="font-normal">{name}</p>
          </div>
        </div>
        <div className="flex justify-between text-xs font-light">
          <p>Price:</p>

          <p className="">€ {album.price},00</p>
        </div>
        <div className="flex justify-between text-xs font-light">
          <p>Quantity:</p>

          <div className="justify-start leading-3 flex h-7  items-center gap-2">
            <p onClick={() => removeItem(item)} className="text-2xl">
              <GrSubtractCircle size="1em" />
            </p>
            <p className=" md:text-lg">{quantity}</p>
            <p className="text-2xl" onClick={() => addItem(item)}>
              <IoAddCircleOutline size="1.2em" />
            </p>
          </div>
        </div>
        <div className="flex justify-between text-xs font-light">
          <p>Subtotal:</p>

          <p className="">€ {quantity * album.price},00</p>
        </div>
      </div>
    );
  }
};
export default CartItemThumb;
