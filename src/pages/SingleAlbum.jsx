import axios from "axios";
import { useEffect, useState } from "react";
import { useAppContext } from "./Home";
import { ToastContainer } from "react-toastify";
import Map from "../components/Map";
import { IoAddCircleOutline } from "react-icons/io5";
import { GrSubtractCircle } from "react-icons/gr";
import Loading from "../components/Loading";
import Interesting from "../components/Interesting";
import Deliveries from "../components/Deliveries";

const SingleAlbum = () => {
  const [price, setPrice] = useState();
  const [remaining, setRemaining] = useState();
  const { addToCart, token } = useAppContext();
  const [quantity, setQuantity] = useState(1);

  const location = window.location.pathname;

  const id = window.location.href.split("/")[4];
  const [album, setAlbum] = useState("");
  const [loading, setIsLoading] = useState(true);
  const apiKey = token;

  console.log(album);

  useEffect(() => {
    if (location.startsWith("/sale")) {
      setPrice((Math.random() * 7 + 4).toFixed(0));
    } else setPrice((Math.random() * 26 + 25).toFixed(0));

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
      setIsLoading(true);
      const response = await axios(config);
      setAlbum(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  if (loading) return <Loading />;

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
      <div className="max-w-5/6  mx-auto mt-4">
        <Map album={name} artist={artist} />
        <ToastContainer />
        <article className="flex gap-8 lg:flex-nowrap justify-center content-center mb-8 lg:p-8">
          <div className="lg:flex lg:pr-6 lg:gap-6 ">
            <div className="px-6 mb-8 ">
              <img className="border border-zinc-950" src={img} alt="" />
            </div>
            <section className="w-4/5 p-4 mx-auto border-4 border-black">
              <div className=" place-content-between">
                <div className="text-xl ">{artist}</div>
                <p className="text-lg font-light ">{name}</p>
                <div className="flex gap-6 text-sm">
                  <div className="font-light text-zinc-800">
                    <p>Label: </p>
                    <p>Release date: </p>
                  </div>
                  <div className="font-light text-zinc-800">
                    <p>{label}</p>
                    <p>{date}</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 max-w-lg">
                <div>
                  <div className="divide-y">
                    <p className="uppercase  font-lg my-6">track list</p>
                    {tracks.map((track) => {
                      const seconds = Math.floor(track.duration_ms / 1000);
                      const remainder =
                        seconds % 60 < 10
                          ? "0" + `${seconds % 60}`
                          : seconds % 60;
                      const time = `${Math.floor(seconds / 60)}:${remainder}`;
                      return (
                        <div
                          className="flex py-1 gap-6 text-sm md:text-baseline "
                          key={track.track_number}
                        >
                          <p className="font-light text-zinc-500 min-w-4">
                            {track.track_number}
                          </p>
                          <p className="font-light grow font-zinc-800">
                            {track.name}
                          </p>
                          <p className="font-light font-zinc-800">{time}</p>
                        </div>
                      );
                    })}
                    <p></p>
                  </div>

                  <div className=" flex flex-col gap-4 p-4 items-end mt-4 w-full">
                    <div>
                      <p className="font-semibold text-end">€ {price},00</p>
                      <p className="font-light text-sm text-end ">
                        Tax included. Shipping calculated at checkout
                      </p>
                    </div>
                    <div className="flex gap-4 w-full">
                      <p className="bg-orange-500 text-center font-semibold text-white text-xs lg:text-sm p-1">
                        Only {remaining} remaining.
                      </p>
                      <div className="flex text-sm gap-2 items-center ml-auto ">
                        <p className="font-semibold text-sm uppercase grow  ">
                          Quantity
                        </p>
                        <GrSubtractCircle
                          className={`${quantity === 1 ? "invisible" : ""}`}
                          onClick={() => decrement()}
                          size="1.4em"
                        />
                        <p className="lg:text-lg font-semibold text-sm">
                          {quantity}
                        </p>
                        <IoAddCircleOutline
                          className={`${
                            quantity >= remaining ? "invisible" : ""
                          }`}
                          onClick={() => setQuantity(quantity + 1)}
                          size="1.5em"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <p
                        className="border-4 uppercase font-semibold p-4  text-center  border-orange-500"
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
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
        <div className="w-4/5 mx-auto">
          <Interesting />
        </div>
        <div className="mx-auto max-w-80 text-center border-2 uppercase font-semibold border-zinc-950 my-8 p-2 hover:bg-orange-400">
          <a href="/albums"> ← Back to Vinyls and Records</a>
        </div>
        <Deliveries />
      </div>
    );
  }
};
export default SingleAlbum;
