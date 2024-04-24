import { Card, CardMedia } from "@mui/material";
import { Movie } from "../../Pages/Homepage/Homepage";

function FilmCard({ apiResponse }: { apiResponse: Movie[] }) {
  if (!apiResponse || apiResponse.length === 0) {
    return <p>No movies found</p>;
  }

  return (
    <>
      <>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 400 }}
            image={`https://image.tmdb.org/t/p/w300/${apiResponse[1].poster_path}`}
            title="green iguana"
          />
        </Card>
      </>
    </>
  );
}

export default FilmCard;
