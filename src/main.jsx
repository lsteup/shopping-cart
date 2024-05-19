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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "albums", element: <Albums /> },
      { path: "artists", element: <Artists /> },
      { path: "genres", element: <Genres /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
