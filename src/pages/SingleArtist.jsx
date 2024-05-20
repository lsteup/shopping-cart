import axios from "axios";
import { useEffect, useState } from "react";
import Album from "../components/Album";
import AlbumsThumb from "../components/AlbumsThumb";

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
      <section className="p-10 bg-amber-50">
        <div className="flex justify-around items-center mb-10 ">
          <h1 className="text-4xl">{name}</h1>
          <img className="border-2 border-gray-900" src={img} alt="" />
        </div>
        <AlbumsThumb albums={albums} />
      </section>
    );
  }
};
export default SingleArtist;
