import "./homepage.css";
import Header from "../../Components/Header/Header";
import FilmCard from "../../Components/FilmCard/FilmCard";
import { useEffect, useRef, useState } from "react";
import { Movie } from "../../util/interface";
import { getTrendingMovieData } from "../../util/utils";
import { Grid, Slider } from "@mui/material";

function Homepage() {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state
  const scrollTimeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getTrendingMovieData("movie", setMovieData, setLoading);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += event.deltaY;
      event.preventDefault();

      // Debounce scroll events
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        scrollTimeoutRef.current = null;
      }, 10); // Adjust debounce delay as needed
    }
  };

  return (
    <>
      <Header />
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="trending" ref={containerRef} onWheel={handleWheel}>
            {movieData.map((movie, index) => (
              <FilmCard key={index} apiResponse={movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Homepage;
