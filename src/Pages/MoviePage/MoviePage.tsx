import Header from "../../Components/Shared/Header/Header";
import "./moviepage.css";
import { getMovieByID } from "../../util/api";
import { useEffect, useState } from "react";
import { Movie } from "../../util/interface";
import { Typography, Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import { formatDate } from "../../util/utils";

function MoviePage() {
  const [movie, setMovie] = useState<Movie | null>(null);

  const { movieId } = useParams();

  console.log(movieId);

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "3vh",
            }}
          >
            <Typography variant="h2" sx={{ fontWeight: "medium" }}>
              {movie.title}
            </Typography>
            <div>
              <Typography variant="h6">
                {formatDate(movie.release_date)}
                {"("}
                {movie.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}, </span>
                ))}
                {")"}
              </Typography>
              <Rating
                name="vote-average"
                value={movie.vote_average / 2} // Scale vote_average to 5 stars
                precision={0.1} // Allows more precise ratings
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
