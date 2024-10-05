import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Pages/Homepage/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import MoviePage from "./Pages/MoviePage/MoviePage";
import TVPage from "./Pages/TVPage/TVPage";

const basePath = import.meta.env.DEV ? "" : "/omerflix2";

const router = createBrowserRouter([
  {
    path: `${basePath}`, // Homepage at /omerflix2
    element: <Homepage />,
  },
  {
    path: `${basePath}/movie/:movieId`, // Movie page in /omerflix2 subdirectory
    element: <MoviePage />,
  },
  {
    path: `${basePath}/tv/:tvId`, // TV page in /omerflix2 subdirectory
    element: <TVPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
