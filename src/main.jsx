import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Albums from "./pages/Albums.jsx";
import Artists from "./pages/Artists.jsx";
import Genres from "./pages/Genres.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import SingleAlbum from "./pages/SingleAlbum.jsx";
import SingleArtist from "./pages/SingleArtist.jsx";
import New from "./pages/New.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "albums", element: <Albums /> },
      { path: "artists", element: <Artists /> },
      { path: "cart", element: <Cart /> },
      { path: "new", element: <New /> },
      { path: "albums/:albumId", element: <SingleAlbum /> },
      { path: "artists/:artistId", element: <SingleArtist /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
