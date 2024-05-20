import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import axios from "axios";
import env from "react-native-dotenv";

const Home = () => {
  const apiKey = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;
  console.log(apiKey);
  const fetchAlbums = async () => {
    const config = {
      method: "get",
      url: "https://api.spotify.com/v1/browse/new-releases",
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };

    try {
      console.log("sending request");
      const response = await axios(config);
      console.log(response.data);
    } catch (error) {
      console.error("Error making request:", error);
    }
  };

  useEffect(() => {
    console.log("use effect triggered");
    fetchAlbums();
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Home;
