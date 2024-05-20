import { useEffect, useState } from "react";
import { AlbumsCat } from "../components/AlbumsCat";
import axios from "axios";
import Artist from "../components/Artist";
import SearchBar from "../components/SearchBar";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [allArtists, setAllArtists] = useState([]);
  const apiKey = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;
  const fetchArtists = async () => {
    const config = {
      method: "get",
      url: "https://api.spotify.com/v1/browse/new-releases?limit=50",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };

    try {
      setIsLoading(true);
      const response = await axios(config);
      const artistsList = response.data.albums.items.map(
        (item) => item.artists[0]
      );
      artistsList.sort((a, b) => a.name.localeCompare(b.name));
      const newArtists = artistsList.map((artist) => {
        const newArtist = { name: artist.name, id: artist.id };
        return newArtist;
      });
      setArtists(newArtists);
      setAllArtists(newArtists);
      setIsLoading(false);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  if (!loading) {
    const handleInput = (search) => {
      console.log(allArtists);
      const newArtists = allArtists.filter((artist) =>
        artist.name.toLowerCase().startsWith(search.toLowerCase())
      );
      setArtists(newArtists);
    };

    return (
      <article className="bg-amber-50 p-4">
        <SearchBar handleInput={handleInput} />
        <div className="bg-amber-50 p-10 flex gap-10 flex-wrap justify-center">
          {artists.map((artist) => (
            <Artist key={artist.id} id={artist.id} />
          ))}
        </div>
      </article>
    );
  }
};
export default Artists;
