import { useEffect, useState } from "react";
import { AlbumsCat } from "../components/AlbumsCat";
import axios from "axios";
import SearchBar from "../components/SearchBar";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const apiKey = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;
  const fetchAlbums = async () => {
    const config = {
      method: "get",
      url: "https://api.spotify.com/v1/browse/new-releases?limit=50",
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
    console.log(albums);
  }, []);

  console.log(albums);

  if (loading) return <div>Loading</div>;
  return (
    <div className="bg-amber-50 p-4">
      <SearchBar />
      <AlbumsCat albums={albums}></AlbumsCat>
    </div>
  );
};
export default Albums;
