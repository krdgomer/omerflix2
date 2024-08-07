import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./Pages/Homepage/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import MoviePage from "./Pages/MoviePage/MoviePage";
import TVPage from "./Pages/TVPage/TVPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/movie/:movieId",
    element: <MoviePage />,
  },
  {
    path: "/tv/:tvId",
    element: <TVPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
