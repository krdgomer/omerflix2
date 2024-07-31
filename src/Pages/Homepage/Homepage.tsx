import "./homepage.css";
import Header from "../../Components/Header/Header";
import { useEffect, useState } from "react";
import { Movie } from "../../util/interface";
import { getAPIData, handleWheel } from "../../util/utils";
import { Typography } from "@mui/material";
import SliderMovies from "../../Components/Homepage/SliderMovies/SliderMovies";

function Homepage() {
  const [weeklyTrendingMovieData, setWeeklyTrendingMovieData] = useState<
    Movie[]
  >([]);
  const [weeklyTrendingTVData, setDailyTrendingTVData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    getAPIData("movie", "week", setWeeklyTrendingMovieData, setLoading);
    getAPIData("tv", "week", setDailyTrendingTVData, setLoading);
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
            <SliderMovies
              movieData={weeklyTrendingMovieData}
              handleWheel={handleWheel}
            />
            <Typography variant="h4" gutterBottom>
              Haftanın Dizileri
            </Typography>
            <SliderMovies
              movieData={weeklyTrendingTVData}
              handleWheel={handleWheel}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Homepage;
