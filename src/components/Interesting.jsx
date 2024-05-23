import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Album from "./Album";
import { useAppContext } from "../pages/Home";

const Interesting = () => {
  const [albums, setAlbums] = useState();
  const [loading, setIsLoading] = useState(true);
  const { token } = useAppContext();

  const fetchAlbums = async () => {
    const apiKey = token;
    const config = {
      method: "get",
      url: "https://api.spotify.com/v1/browse/new-releases?limit=4",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };
    try {
      setIsLoading(true);
      const response = await axios(config);
      const albums = response.data.albums.items;
      setAlbums(albums);
      setIsLoading(false);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="my-16">
      <p className="font-semibold uppercase text-lg my-16">
        You might also be interested in
      </p>
      {loading && <loading />}
      <div className="flex gap-20">
        {albums.map((album) => {
          const artist = album.artists[0].name;
          const name = album.name;
          const date = album.release_date;
          const img = album.images[0].url;
          const tracks = album.total_tracks;
          const id = album.id;
          return (
            <div key={id} className="shrink max-w-28">
              <Album
                img={img}
                name={name}
                artist={artist}
                date={date}
                tracks={tracks}
                id={id}
                key={id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Interesting;
