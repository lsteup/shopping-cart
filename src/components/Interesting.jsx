import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Album from "./Album";
import { useAppContext } from "../pages/Home";
import { AlbumsCat } from "./AlbumsCat";

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
    if (token) {
      fetchAlbums();
    }
  }, [token]);

  if (loading) return <Loading />;
  return (
    <div className="my-16">
      <p className=" uppercase text-lg">You May also find interesting ...</p>
      {loading && <loading />}
      <div className="flex flex-wrap gap-20">
        <AlbumsCat albums={albums} />
      </div>
    </div>
  );
};
export default Interesting;
