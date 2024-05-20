import { useEffect, useState } from "react";
import { AlbumsCat } from "../components/AlbumsCat";
import axios from "axios";
import Artist from "../components/Artist";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const apiKey = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;
  const fetchArtists = async () => {
    const config = {
      method: "get",
      url: "https://api.spotify.com/v1/browse/new-releases",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };

    try {
      const response = await axios(config);
      const artistsList = response.data.albums.items.map(
        (item) => item.artists[0].id
      );
      setArtists(artistsList);
      setIsLoading(false);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  if (loading) return <div>Loading</div>;
  return artists.map((artist) => <Artist key={artist} id={artist} />);
};
export default Artists;
