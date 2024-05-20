import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  return (
    <div className="bg-amber-50">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Home;
