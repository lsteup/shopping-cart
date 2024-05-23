import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Albums from "./pages/Albums.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import SingleAlbum from "./pages/SingleAlbum.jsx";
import SingleArtist from "./pages/SingleArtist.jsx";
import New from "./pages/New.jsx";
import Sale from "./pages/Sale.jsx";
import Vintage from "./pages/Vintage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "albums", element: <Albums /> },
      { path: "sale", element: <Sale /> },
      { path: "cart", element: <Cart /> },
      { path: "new", element: <New /> },
      { path: "vintage", element: <Vintage /> },
      { path: "albums/:albumId", element: <SingleAlbum /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
