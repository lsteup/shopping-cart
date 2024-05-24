import { useEffect, useState, useContext } from "react";
import { AlbumsCat } from "../components/AlbumsCat";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import Products from "../components/Products";
import Deliveries from "../components/Deliveries";
import Loading from "../components/Loading";
import { useAppContext } from "./Home";
import { sale } from "../../data";

const Sale = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const total = albums.length;
  const { token } = useAppContext();

  const fetchAlbums = async () => {
    const config = {
      method: "get",
      url: `https://api.spotify.com/v1/albums?${sale}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      setIsLoading(true);
      const response = await axios(config);
      console.log(response);
      const newAlbums = response.data.albums;

      setAlbums(newAlbums);
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

  const handleInput = (search) => {
    const newAlbums = allAlbums.filter((album) =>
      album.name.toLowerCase().startsWith(search.toLowerCase())
    );
    setAlbums(newAlbums);
  };

  if (loading) return <Loading />;
  return (
    <div className="">
      <div className="w-11/12 mx-auto">
        <Title
          title="Sale"
          text="Discover unbeatable deals on a curated selection of records and accessories—get your favorite tunes at irresistible prices."
        />
        <SearchBar handleInput={handleInput} />
        <Products num={total} />
        <AlbumsCat albums={albums} cat="sale"></AlbumsCat>
      </div>
      <Deliveries />
    </div>
  );
};

export default Sale;
