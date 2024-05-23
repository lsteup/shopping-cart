import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useAppContext } from "../pages/Home";
import axios from "axios";
import { Link } from "react-router-dom";
import { sale } from "../../data";

const Feature = ({ title, albumId, id }) => {
  const [loading, setIsLoading] = useState(true);
  const [album, setAlbum] = useState();
  const context = useAppContext();
  const token = context.token;

  const fetchAlbum = async () => {
    const config = {
      method: "get",
      url: `https://api.spotify.com/v1/albums/${albumId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      console.log(context);
      setIsLoading(true);
      const response = await axios(config);
      setAlbum(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchAlbum();
    }
  }, [token]);

  if (loading) return <Loading />;
  return (
    <div className="mt-3 w-4/5 mx-auto  md:w-full ">
      <p className="border-4 border-orange-500 px-4 py-2 w-max">{title}</p>
      <div className="pt-6 pb-12">
        <Link className="" to={`/albums/${albumId}`}>
          <img
            className="border border-black max-w-72 sm:max-w-96 md:max-w-72 lg:max-w-80 xl:max-w-96"
            src={album.images[0].url}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};
export default Feature;
