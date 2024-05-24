import { useEffect, useState, useContext } from "react";
import { AlbumsCat } from "../components/AlbumsCat";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import Products from "../components/Products";
import Deliveries from "../components/Deliveries";
import Loading from "../components/Loading";
import { useAppContext } from "./Home";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [allAlbums, setAllAlbums] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const total = albums.length;
  const { token } = useAppContext();

  const fetchAlbums = async () => {
    const config = {
      method: "get",
      url: "https://api.spotify.com/v1/browse/new-releases?limit=50",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      setIsLoading(true);
      const response = await axios(config);
      const newAlbums = response.data.albums.items.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setAlbums(newAlbums);
      setAllAlbums(newAlbums);
      setIsLoading(false);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

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
        title="Albums"
        text="Journey through our extensive catalog of albums, where every record tells a story. From iconic classics to contemporary must-haves, there's an album waiting for you."
      />
      <SearchBar handleInput={handleInput} />
      <Products num={total} />
      <AlbumsCat albums={albums} cat="albums"></AlbumsCat>
      <Deliveries />
    </div>
  );
};
export default Albums;
