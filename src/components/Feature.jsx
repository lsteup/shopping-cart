import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useAppContext } from "../pages/Home";
import axios from "axios";
import { Link } from "react-router-dom";

const Feature = ({ title, albumId }) => {
  const [loading, setIsLoading] = useState(true);
  const [album, setAlbum] = useState();
  const { token } = useAppContext();
  const apiKey = token;

  const fetchAlbum = async () => {
    const config = {
      method: "get",
      url: `https://api.spotify.com/v1/albums/${albumId}`,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };

    try {
      setIsLoading(true);
      const response = await axios(config);
      setAlbum(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="mt-3 ">
      <p className="border-4 border-orange-500 px-4 py-2 w-max">{title}</p>
      <div className="pt-6 pb-12">
        <Link to={`/albums/${albumId}`}>
          <img
            className="border border-black w-3/4"
            src={album.images[0].url}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};
export default Feature;
