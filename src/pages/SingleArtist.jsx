import axios from "axios";
import { useEffect, useState } from "react";
import Album from "../components/Album";

const SingleArtist = () => {
  const id = window.location.href.split("/")[4];
  const [artist, setArtist] = useState("");
  const [albums, setAlbums] = useState();
  const [loading, setIsLoading] = useState(true);
  const apiKey = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;

  const fetchArtist = async () => {
    const config = {
      method: "get",
      url: `https://api.spotify.com/v1/artists/${id}`,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };

    try {
      const response = await axios(config);
      console.log(response.data);
      setArtist(response.data);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  const fetchArtistAlbums = async () => {
    const config = {
      method: "get",
      url: `https://api.spotify.com/v1/artists/${id}/albums`,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };

    try {
      const response = await axios(config);
      console.log(response.data);
      setAlbums(response.data.items);
      setIsLoading(false);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchArtist();
    fetchArtistAlbums();
  }, []);

  if (loading) return <div>loading</div>;
  if (!loading) {
    const name = artist.name;
    const img = artist.images[1].url;
    console.log(albums);

    return (
      <section className="p-10">
        <div>{name}</div>
        <img src={img} alt="" />
        <section>
          {albums.map((album) => (
            <Album
              img={album.images[1].url}
              name={album.name}
              artist={album.artists[0].name}
              id={album.id}
              key={album.id}
            />
          ))}
        </section>
      </section>
    );
  }
};
export default SingleArtist;
