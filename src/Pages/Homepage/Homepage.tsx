import "./homepage.css";
import Header from "../../Components/Header/Header";
import FilmCard from "../../Components/FilmCard/FilmCard";
import { useEffect, useRef, useState } from "react";
import { Movie } from "../../util/interface";
import { getTrendingMovieData, handleWheel } from "../../util/utils";
import { Typography } from "@mui/material";

function Homepage() {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state
  const scrollTimeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getTrendingMovieData("movie", setMovieData, setLoading);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <>
      <Header />
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              Haftanın Filmleri
            </Typography>
            <div
              className="trending"
              ref={containerRef}
              onWheel={(e) => handleWheel(e, scrollTimeoutRef, containerRef)}
            >
              {movieData.map((movie, index) => (
                <FilmCard key={index} apiResponse={movie} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Homepage;
