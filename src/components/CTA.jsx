import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useAppContext } from "../pages/Home";
import { AlbumsCat } from "../components/AlbumsCat";
import Loading from "./Loading";

const CTA = () => {
  const [albums, setAlbums] = useState();
  const [loading, setIsLoading] = useState(true);
  const context = useAppContext();
  const token = context.token;

  const fetchAlbums = async () => {
    const config = {
      method: "get",
      url: "https://api.spotify.com/v1/browse/new-releases?limit=5",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      console.log(context);
      setIsLoading(true);
      const response = await axios(config);
      const newAlbums = response.data.albums.items.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setAlbums(newAlbums);
      setIsLoading(false);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchAlbums();
      console.log(albums);
    }
  }, [token]);

  if (loading) return <Loading />;

  return (
    <div className="mx-auto w-4/5">
      <p className="border-4 border-orange-500 px-4 py-2 w-max">New Releases</p>
      {<AlbumsCat albums={albums}></AlbumsCat>}

      <Link className="" to="/new">
        <p className="my-6 capitalize mx-auto border-4 border-orange-500 px-4 py-2 text-center">
          see all new releases
        </p>
      </Link>
    </div>
  );
};
export default CTA;
