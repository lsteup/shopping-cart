import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Artist = ({ id }) => {
  const [artist, setArtist] = useState();
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
      setArtist(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  if (loading) return <div>loading</div>;
  if (!loading) {
    console.log(artist);
    const img = artist.images[1].url;
    const name = artist.name;
    return (
      <Link
        to={artist.id}
        className="max-w-48 border-2 border-gray-900 bg-slate-50"
      >
        <img className="border-b-2 border-gray-900" src={img} alt="" />
        <div className="p-2">{name}</div>
      </Link>
    );
  }
};
export default Artist;
