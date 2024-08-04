import Header from "../../Components/Shared/Header/Header";
import "./moviepage.css";
import { getMovieByID } from "../../util/utils";
import { useEffect, useState } from "react";
import { Movie } from "../../util/interface";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

function MoviePage() {
  const [movie, setMovie] = useState<Movie | null>(null);

  const { movieId } = useParams();

  console.log(movieId);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function fetchMovie() {
      const movieData = await getMovieByID(movieId);
      console.log(movieData);
      setMovie(movieData);
    }
    fetchMovie();
  }, []);

  if (!movie) {
    return (
      <div>
        <Header />
        Loading
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="containerdiv">
        <div style={{ display: "flex" }}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt="poster"
            className="posterImage"
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2">{movie.title}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
