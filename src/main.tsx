import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Pages/Homepage/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import MoviePage from "./Pages/MoviePage/MoviePage";
import TVPage from "./Pages/TVPage/TVPage";

const router = createBrowserRouter([
  {
    path: "/omerflix2", // Homepage at /omerflix2
    element: <Homepage />,
  },
  {
    path: "/omerflix2/movie/:movieId", // Movie page in /omerflix2 subdirectory
    element: <MoviePage />,
  },
  {
    path: "/omerflix2/tv/:tvId", // TV page in /omerflix2 subdirectory
    element: <TVPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
