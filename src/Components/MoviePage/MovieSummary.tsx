import { Typography, Rating } from "@mui/material";

import { formatDate, formatGenres, formatRuntime } from "../../util/utils";
import { Movie } from "../../util/interface";

function MovieSummary({ movie }: { movie: Movie }) {
  return (
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
          {formatDate(movie.release_date)}
        </Typography>
        <div>
          <Typography variant="subtitle1" sx={{ fontWeight: "light" }}>
            {formatGenres(movie.genres)}
            {" • "}
            {formatRuntime(movie.runtime)}
          </Typography>
          <Rating
            name="vote-average"
            value={movie.vote_average / 2} // Scale vote_average to 5 stars
            precision={0.1} // Allows more precise ratings
            readOnly
          />

          <Typography>
            <br />
            Overview <hr></hr>
            {movie.overview}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default MovieSummary;
