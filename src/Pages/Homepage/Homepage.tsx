import "./homepage.css";
import Header from "../../Components/Header/Header";
import FilmCard from "../../Components/FilmCard/FilmCard";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Movie {
  poster_path: string;
  // Add other properties if needed
}

function Homepage() {
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    async function getTrendingMovieData(type: string) {
      try {
        const apiKey = "a5c19fd857457dfe953dfcbd352d50fe";
        let resp = await axios.get(
          `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie`
        );
        console.log(21, resp.data.results);

        setMovieData(resp.data.results);
        setLoading(false); // Update loading state
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setLoading(false); // Ensure loading state is updated even in case of an error
      }
    }

    getTrendingMovieData("movie");
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <>
      <Header />
      {loading ? <p>Loading...</p> : <FilmCard apiResponse={movieData} />}
    </>
  );
}

export default Homepage;
