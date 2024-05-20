import axios from "axios";
import { useEffect, useState } from "react";

const SingleAlbum = (props) => {
  const id = window.location.href.split("/")[4];
  console.log(id);
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
      console.log(response.data);
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

    return (
      <article className="p-10 flex gap-10 flex-wrap justify-center content-center">
        <img className="border-2 border-gray-900 max-h-80" src={img} alt="" />
        <section className="border-2 border-gray-900 max-w-[600px] min-w-[340px] grow p-3">
          <div className="flex place-content-between">
            <div>
              <p className="font-semibold text-xl ">{name}</p>
              <p className="text-lg text-gray-500">{artist}</p>
            </div>
            <p>price</p>
          </div>
          <div className="mt-3">
            <div className="divide-y">
              <div></div>
              {tracks.map((track) => {
                console.log(track);
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
            <p>quantity</p>
            <p>add to cart</p>
          </div>
        </section>
      </article>
    );
  }
};
export default SingleAlbum;
