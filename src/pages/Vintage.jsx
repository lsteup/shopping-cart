import { useEffect, useState, useContext } from "react";
import { AlbumsCat } from "../components/AlbumsCat";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import Products from "../components/Products";
import Deliveries from "../components/Deliveries";
import Loading from "../components/Loading";
import { useAppContext } from "./Home";
import { vintage } from "../../data";

const Vintage = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const total = albums.length;
  const { token } = useAppContext();

  const fetchAlbums = async () => {
    const config = {
      method: "get",
      url: `https://api.spotify.com/v1/albums?${vintage}`,
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
      <Title
        title="Vintage"
        text="Journey through our extensive catalog of albums, where every record tells a story. From iconic classics to contemporary must-haves, there's an album waiting for you."
      />
      <SearchBar handleInput={handleInput} />
      <Products num={total} />
      <AlbumsCat albums={albums}></AlbumsCat>
      <Deliveries />
    </div>
  );
};

export default Vintage;
