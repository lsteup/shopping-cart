import axios from "axios";
import { useEffect, useState } from "react";
import { useAppContext } from "./Home";
import { ToastContainer } from "react-toastify";
import Map from "../components/Map";

const SingleAlbum = () => {
  let price = (Math.random() * 26 + 25).toFixed(0);
  const { addToCart } = useAppContext();
  const [quantity, setQuantity] = useState(1);

  const id = window.location.href.split("/")[4];
  const [album, setAlbum] = useState("");
  const [loading, setIsLoading] = useState(true);
  const apiKey = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;

  const fetchAlbum = async () => {
    const config = {
      method: "get",
      url: `https://api.spotify.com/v1/albums/${id}`,
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
    const name = album.name;
    const img = album.images[0].url;
    const artist = album.artists[0].name;
    const tracks = album.tracks.items;
    const id = album.id;

    const decrement = () => {
      if (quantity !== 1) setQuantity(quantity - 1);
    };

    return (
      <div className="p-10 pt-4">
        <Map album={name} artist={artist} />
        <ToastContainer />
        <article className="flex gap-10 flex-wrap justify-center content-center">
          <img className="border-2 border-gray-900 max-h-80" src={img} alt="" />
          <section className="border-2 border-gray-900 max-w-[600px] min-w-[340px] grow p-3">
            <div className="flex place-content-between">
              <div>
                <p className="font-semibold text-xl ">{name}</p>
                <p className="text-lg text-gray-500">{artist}</p>
              </div>
              <p>{price}</p>
            </div>
            <div className="mt-3">
              <div className="divide-y">
                <div></div>
                {tracks.map((track) => {
                  return (
                    <div className="flex gap-5" key={track.track_number}>
                      <p className="text-gray-500">{track.track_number}</p>
                      <div>{track.name}</div>
                    </div>
                  );
                })}
                <div></div>
              </div>
            </div>
            <div className="flex place-content-between mt-3">
              {quantity > 1 && <p onClick={() => decrement()}>decrement</p>}
              <p>{quantity}</p>
              <p onClick={() => setQuantity(quantity + 1)}>increment</p>
              <p
                onClick={() =>
                  addToCart({
                    quantity,
                    id: album.id,
                    price: price,
                  })
                }
              >
                add to cart
              </p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};
export default SingleAlbum;
