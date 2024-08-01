import "./homepage.css";
import { useEffect, useState } from "react";
import { Movie } from "../../util/interface";
import { getAPIData, handleWheel } from "../../util/utils";
import { Box, Typography } from "@mui/material";
import SliderMovies from "../../Components/Homepage/SliderMovies/SliderMovies";
import Logo from "../../Components/Homepage/Logo/Logo";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TopRatedHomepage from "../../Components/Homepage/TopRatedHomepage/TopRatedHomepage";

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
      <Logo />
      <Box sx={{ p: "rem" }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Typography
              variant="h4"
              sx={{ my: "1rem", ml: 1, fontWeight: "medium" }}
            >
              Haftanın Filmleri{" "}
              <a href="">
                <ArrowForwardIosIcon sx={{ color: "white" }} />
              </a>
            </Typography>
            <SliderMovies
              movieData={weeklyTrendingMovieData}
              handleWheel={handleWheel}
            />
            <Typography
              variant="h4"
              sx={{ my: "1rem", ml: 1, fontWeight: "medium" }}
            >
              Haftanın Dizileri{" "}
              <a href="">
                <ArrowForwardIosIcon sx={{ color: "white" }} />
              </a>
            </Typography>
            <SliderMovies
              movieData={weeklyTrendingTVData}
              handleWheel={handleWheel}
            />
          </>
        )}
      </Box>
      <TopRatedHomepage />
    </>
  );
}

export default Homepage;
