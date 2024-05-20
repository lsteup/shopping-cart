import axios from "axios";
import { useEffect, useState } from "react";

const SingleAlbum = (props) => {
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
    const tracksNum = album.total_tracks;

    return (
      <article className="p-10">
        <img src={img} alt="" />
        <section>
          <p>{name}</p>
          <p>{artist}</p>
          <p>{tracksNum}</p>
        </section>
        <section>
          {tracks.map((track) => {
            console.log(track);
            return (
              <div key={track.track_number}>
                <p>{track.name}</p>
                <p>{track.track_number}</p>
              </div>
            );
          })}
        </section>
        <p>price</p>
        <p>quantity</p>
        <p>add to cart</p>
      </article>
    );
  }
};
export default SingleAlbum;
