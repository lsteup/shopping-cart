import axios from "axios";
import { useState, useEffect } from "react";
import { useAppContext } from "../pages/Home";
import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";

const CartItem = ({ item }) => {
  const [album, setAlbum] = useState();
  const [loading, setIsLoading] = useState(true);
  const apiKey = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;
  const { cart, removeFromCart, removeItem, addItem } = useAppContext();
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
    const img = album.images[2].url;
    const name = album.name;
    const artist = album.artists[0].name;
    return (
      <div className="flex gap-4 justify-start my-4 items-center text-xs md:text-base">
        <img className="border border-zinc-950" src={img} alt="" />
        <div className="grow">
          <p className="text-semibold md:text-lg">{name}</p>
          <p className="text-zinc-500 md:text-base">{artist}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-orange-700 font-semibold md:text-lg">
            €{album.price},00
          </p>
          <div className="text-center leading-3 flex justify-between items-center gap-2">
            <p onClick={() => removeItem(item)} className="text-2xl">
              <GrSubtractCircle size="1em" />
            </p>
            <p className="font-semibold">{quantity}</p>
            <p className="text-2xl" onClick={() => addItem(item)}>
              <IoAddCircleOutline size="1.2em" />
            </p>
          </div>
        </div>
      </div>
    );
  }
};
export default CartItem;
