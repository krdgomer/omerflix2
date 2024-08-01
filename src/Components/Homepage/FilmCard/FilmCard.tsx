import { Typography, Rating } from "@mui/material";
import { Movie } from "../../../util/interface";
import { Media, Overlay, StyledCard } from "../../../util/styles";

function FilmCard({ apiResponse }: { apiResponse: Movie }) {
  const displayTitle = apiResponse.title || apiResponse.name || "Untitled";

  return (
    <>
      <div style={{ display: "inline-block", margin: "4px" }}>
        <a href="" style={{ textDecoration: "none" }}>
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

export default FilmCard;
