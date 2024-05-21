import { useEffect, useState } from "react";
import { AlbumsCat } from "../components/AlbumsCat";
import axios from "axios";
import Artist from "../components/Artist";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";

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
      <article className="bg-orange-50 p-4">
        <Title
          title="Artists"
          text="Explore our comprehensive artist directory and uncover the discography of your favorite musicians. From legends to emerging stars, dive into the world of your beloved artists."
        />
        <SearchBar handleInput={handleInput} />
        {artists.length == 0 && (
          <div className="p-4 text-lg text-zinc-700">No Artists found ...</div>
        )}

        <div className="bg-orange-50 p-10 flex gap-10 flex-wrap justify-center items-center">
          {artists.map((artist) => (
            <Artist key={artist.id} id={artist.id} />
          ))}
        </div>
      </article>
    );
  }
};
export default Artists;
