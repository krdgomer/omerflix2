import { Card, CardMedia } from "@mui/material";
import { Movie } from "../../util/interface";

function FilmCard({ apiResponse }: { apiResponse: Movie }) {
  return (
    <>
      <div style={{ display: "inline-block", margin: "4px" }}>
        <Card sx={{ width: "100%" }}>
          <CardMedia
            sx={{ height: 450, width: 300 }}
            image={`https://image.tmdb.org/t/p/w300/${apiResponse.poster_path}`}
            title="green iguana"
          />
        </Card>
      </div>
    </>
  );
}

export default FilmCard;
