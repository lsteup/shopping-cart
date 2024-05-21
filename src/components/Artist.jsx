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
    const img = artist.images[1].url;
    const name = artist.name;
    return (
      <Link
        to={artist.id}
        className="hover:shadlow-3xl hover:scale-110 hover:text-orange-600 max-w-48 rounded-md bg-zinc-50 shadow-sm "
      >
        <img className="border border-zinc-950 " src={img} alt="" />
        <div className=" border border-zinc-950 p-2 text-xl border-t-0">
          {name}
        </div>
      </Link>
    );
  }
};
export default Artist;
