import Typography from "@mui/material/Typography";
import { Tv } from "../../util/interface";
import { formatDate, formatGenres } from "../../util/utils";
import Rating from "@mui/material/Rating";

function TVSummary({ tv }: { tv: Tv }) {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`}
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
          {tv.name}
          {formatDate(tv.first_air_date)}
        </Typography>
        <div>
          <Typography variant="subtitle1" sx={{ fontWeight: "light" }}>
            {formatGenres(tv.genres)}
            {" • "}
            {`${tv.number_of_seasons} seasons, ${tv.number_of_episodes} episodes`}
          </Typography>
          <Rating
            name="vote-average"
            value={tv.vote_average / 2} // Scale vote_average to 5 stars
            precision={0.1} // Allows more precise ratings
            readOnly
          />
          <Typography>
            <br />
            Overview <hr></hr>
            {tv.overview}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default TVSummary;
