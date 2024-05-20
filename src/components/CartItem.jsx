import axios from "axios";
import { useState, useEffect } from "react";

const CartItem = ({ item }) => {
  const [album, setAlbum] = useState();
  const [loading, setIsLoading] = useState(true);
  const apiKey = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;

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
      setAlbum(response.data);
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
    console.log(album);
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
          <p>price</p>
          <p>quantity</p>
        </div>
      </div>
    );
  }
};
export default CartItem;
