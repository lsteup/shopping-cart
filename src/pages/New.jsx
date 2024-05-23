import { useEffect, useState } from "react";
import { AlbumsCat } from "../components/AlbumsCat";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import Products from "../components/Products";
import Loading from "../components/Loading";
import Deliveries from "../components/Deliveries";
import { useAppContext } from "./Home";

const New = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const total = albums.length;
  const { token } = useAppContext();
  const apiKey = token;
  const fetchAlbums = async () => {
    const config = {
      method: "get",
      url: "https://api.spotify.com/v1/browse/new-releases?limit=10",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };

    try {
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
    fetchAlbums();
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="">
      <Title
        title="New Releases"
        text="Be the first to discover the latest hits and fresh sounds. Explore our ever-updating collection of new releases and find your next favorite record."
      />
      <Products num={total} />
      <AlbumsCat albums={albums}></AlbumsCat>
      <Deliveries />
    </div>
  );
};
export default New;
