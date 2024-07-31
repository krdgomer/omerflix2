import { Card, CardMedia, Typography, Box, Rating } from "@mui/material";
import { Movie } from "../../../util/interface";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  position: "relative",
  overflow: "hidden",
  width: 300,
  height: 450,
  "&:hover .media": {
    filter: "blur(5px)",
    transform: "scale(1.05)",
    transition: "all 0.3s ease",
  },
  "&:hover .overlay": {
    opacity: 1,
    transition: "opacity 0.3s ease",
  },
});

const Media = styled(CardMedia)({
  width: 300,
  height: 450,
  transition: "all 0.3s ease",
});

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "white",
  opacity: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  textAlign: "center",
});

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
