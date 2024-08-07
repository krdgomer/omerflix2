import "./homepage.css";
import { useEffect, useState } from "react";
import { Movie, Tv } from "../../util/interface";
import { handleWheel } from "../../util/utils";
import { Box, Typography } from "@mui/material";
import SliderMedia from "../../Components/Homepage/SliderMedia/SliderMedia";
import Logo from "../../Components/Homepage/Logo/Logo";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TopRatedHomepage from "../../Components/Homepage/TopRatedHomepage/TopRatedHomepage";
import Join from "../../Components/Homepage/Join/Join";
import Footer from "../../Components/Shared/Footer/Footer";
import { getTrendingMovies, getTrendingTv } from "../../util/api";

function Homepage() {
  const [weeklyTrendingMovieData, setWeeklyTrendingMovieData] = useState<
    Movie[]
  >([]);
  const [weeklyTrendingTVData, setDailyTrendingTVData] = useState<Tv[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    getTrendingMovies("week", setWeeklyTrendingMovieData, setLoading);
    getTrendingTv("week", setDailyTrendingTVData, setLoading);
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
            <SliderMedia
              mediaData={weeklyTrendingMovieData}
              handleWheel={handleWheel}
              type="movie"
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
            <SliderMedia
              mediaData={weeklyTrendingTVData}
              handleWheel={handleWheel}
              type="tv"
            />
          </>
        )}
      </Box>
      <TopRatedHomepage />
      <Join />
      <Footer />
    </>
  );
}

export default Homepage;
