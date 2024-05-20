import axios from "axios";
import { useState, useEffect } from "react";
import { useAppContext } from "../pages/Home";

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
      <div className="flex gap-4 justify-start m-4 border-2 border-slate-900 p-2 items-center">
        <img src={img} alt="" />
        <div className="grow">
          <p>{name}</p>
          <p>{artist}</p>
        </div>
        <div>
          <p>{album.price}</p>
          <p onClick={() => removeItem(item)}>decrement</p>
          <p>{quantity}</p>
          <p onClick={() => addItem(item)}>increment</p>
        </div>
        <div>
          <p onClick={() => removeFromCart(item)}>remove</p>
        </div>
      </div>
    );
  }
};
export default CartItem;
