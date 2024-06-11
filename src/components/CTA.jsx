import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useAppContext } from "../pages/Home";
import { AlbumsCat } from "../components/AlbumsCat";
import Loading from "./Loading";
import { sale, vintage } from "../../data";
import Button from "./Button";

const CTA = ({ title, id, link, cat }) => {
  const [albums, setAlbums] = useState();
  const [loading, setIsLoading] = useState(true);
  const context = useAppContext();
  const token = context.token;

  const saleSample = sale.split(",").slice(0, 5).join(",");
  const vintageSample = vintage.split(",").slice(0, 5).join(",");

  let url, text;

  if (id === "sale") {
    url = `https://api.spotify.com/v1/albums?${saleSample}`;
    text = "See all Sale Items";
  } else if (id === "vintage") {
    url = `https://api.spotify.com/v1/albums?${vintageSample}`;
    text = "See all Vintage Records";
  } else {
    url = "https://api.spotify.com/v1/browse/new-releases?limit=5";
    text = "See all New Releases";
  }

  const fetchAlbums = async () => {
    const config = {
      method: "get",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      console.log(context);
      setIsLoading(true);
      const response = await axios(config);
      const newAlbums = response.data.albums.items || response.data.albums;
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
      <p className=" border-4 border-orange-500 px-4 py-2 w-max  ">{title}</p>
      {<AlbumsCat albums={albums} cat={cat}></AlbumsCat>}

      <Link className="" to={link}>
        <p className="my-6 text-sm capitalize mx-auto border-b-2 border-orange-500 font-medium px-1  text-center w-fit">
          {text}
        </p>
      </Link>
    </div>
  );
};
export default CTA;
