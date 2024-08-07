import { Typography, Rating } from "@mui/material";
import { isMovie, isTv, Movie, Tv } from "../../../util/interface";
import { Media, Overlay, StyledCard } from "../../../util/styles";
import { useNavigate } from "react-router-dom";

function MediaCard({
  apiResponse,
  type,
}: {
  apiResponse: Movie | Tv;
  type: string;
}) {
  let displayTitle: string;

  if (isMovie(apiResponse)) {
    displayTitle = apiResponse.title || "Untitled";
  } else if (isTv(apiResponse)) {
    displayTitle = apiResponse.name || "Untitled";
  } else {
    displayTitle = "Unknown";
  }

  const navigate = useNavigate();

  const handleMovieClick = (id: number) => {
    if (type == "movie") {
      navigate(`/movie/${id}`);
    }
    if (type == "tv") {
      navigate(`/tv/${id}`);
    }
  };

  return (
    <>
      <div style={{ display: "inline-block", margin: "4px" }}>
        <a
          href=""
          onClick={() => handleMovieClick(apiResponse.id)}
          style={{ textDecoration: "none" }}
        >
          <StyledCard>
            <Media
              className="media"
              image={`https://image.tmdb.org/t/p/w300/${apiResponse.poster_path}`}
            />
            <Overlay className="overlay">
              <Typography variant="h6" sx={{ textWrap: "wrap" }}>
                {displayTitle}
              </Typography>
              <Rating name="read-only" value={3} readOnly />
              <Typography variant="body2" sx={{ textWrap: "wrap" }}>
                {apiResponse.overview}
              </Typography>
            </Overlay>
          </StyledCard>
        </a>
      </div>
    </>
  );
}

export default MediaCard;
