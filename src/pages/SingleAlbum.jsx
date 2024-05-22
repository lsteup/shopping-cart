import axios from "axios";
import { useEffect, useState } from "react";
import { useAppContext } from "./Home";
import { ToastContainer } from "react-toastify";
import Map from "../components/Map";
import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";

const SingleAlbum = () => {
  const [price, setPrice] = useState();
  const [remaining, setRemaining] = useState();
  const { addToCart } = useAppContext();
  const [quantity, setQuantity] = useState(1);

  const id = window.location.href.split("/")[4];
  const [album, setAlbum] = useState("");
  const [loading, setIsLoading] = useState(true);
  const apiKey = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;

  useEffect(() => {
    setPrice((Math.random() * 26 + 25).toFixed(0));
    setRemaining((Math.random() * 4 + 1).toFixed(0));
  }, []);

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
  console.log(album);

  if (!loading) {
    const name = album.name;
    const img = album.images[0].url;
    const artist = album.artists[0].name;
    const tracks = album.tracks.items;
    const id = album.id;
    const label = album.label;
    const date = album.release_date;

    const decrement = () => {
      if (quantity !== 1) setQuantity(quantity - 1);
    };

    return (
      <div className="p-10 pt-4">
        <Map album={name} artist={artist} />
        <ToastContainer />
        <article className="flex gap-10 flex-wrap justify-center content-center">
          <section className="max-w-[600px] min-w-[340px] grow p-3">
            <div className=" place-content-between">
              <p className="font-semibold text-2xl uppercase pb-4">
                {artist} - {name}
              </p>
              <div className="flex gap-6 text-sm">
                <div className="capitalize font-semibold">
                  <p>label: </p>
                  <p>release date: </p>
                </div>
                <div className="font-light text-zinc-800">
                  <p>{label}</p>
                  <p>{date}</p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="divide-y">
                <p className="uppercase font-semibold font-lg my-6">
                  track list
                </p>
                {tracks.map((track) => {
                  const seconds = Math.floor(track.duration_ms / 1000);
                  const time = `${Math.floor(seconds / 60)}:${seconds % 60}`;
                  return (
                    <div className="flex gap-6" key={track.track_number}>
                      <p className="font-semibold">{track.track_number}</p>
                      <p className="font-light grow font-zinc-800">
                        {track.name}
                      </p>
                      <p className="font-light font-zinc-800">{time}</p>
                    </div>
                  );
                })}
                <div></div>
              </div>
            </div>
          </section>
          <div className="flex flex-col gap-4 max-w-56">
            <img
              className="self-center border border-zinc-950 shadow-[rgba(0,0,0,0.36)_13px_13px_6px_-2px] -rotate-3 max-w-48 mb-8"
              src={img}
              alt=""
            />
            <p className="font-semibold text-lg uppercase  max-w-56 ">
              {artist} - {name}
            </p>
            <p className="uppercase">{label}</p>
            <p className="font-semibold">€{price},00</p>
            <p className="font-light text-sm">
              Tax included. Shipping calculated at checkout
            </p>
            <p className="bg-orange-500 text-center font-semibold text-white text-sm p-1">
              Only {remaining} remaining.
            </p>

            <div className="flex gap-2 items-center">
              <p className="font-semibold uppercase grow ">Quantity</p>
              <GrSubtractCircle
                className={`${quantity === 1 ? "invisible" : ""}`}
                onClick={() => decrement()}
                size="1.5em"
              />

              <p className="text-lg font-semibold">{quantity}</p>
              <IoAddCircleOutline
                className={`${quantity >= remaining ? "invisible" : ""}`}
                onClick={() => setQuantity(quantity + 1)}
                size="1.7em"
              />
            </div>
            <p
              className="bg-zinc-950 text-orange-400 uppercase font-semibold p-4 text-center border-2 border-orange-500"
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
        </article>
      </div>
    );
  }
};
export default SingleAlbum;
