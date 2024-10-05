import { useEffect, useState } from "react";
import {
  Avatar,
  createTheme,
  Divider,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Review } from "../../../util/interface";
import { getReviewsByID } from "../../../util/api";
import "./reviews.css";

function Reviews({ movieId }: { movieId: string }) {
  const [reviews, setReviews] = useState<Array<Review> | null>(null);

  useEffect(() => {
    async function fetchMovieReviews() {
      const reviewData = await getReviewsByID(movieId);
      setReviews(reviewData.results);
    }
    fetchMovieReviews();
  }, [movieId]);

  // Ensure reviews is not null and has at least one element before rendering
  if (!reviews || reviews.length === 0) {
    return <div>No reviews available</div>;
  }
  const darkTheme = createTheme({ palette: { mode: "dark" } });
  return (
    <div className="container1">
      <Typography variant="h4">Reviews:</Typography>
      {/* Map through the first 5 reviews */}
      {reviews.slice(0, 5).map((review, index) => (
        <div key={index} className="container2">
          <ThemeProvider theme={darkTheme}>
            <Paper elevation={4} sx={{ padding: 2 }}>
              <div className="container3">
                {review?.author_details.avatar_path ? (
                  <Avatar
                    src={`https://image.tmdb.org/t/p/w300/${review.author_details.avatar_path}`}
                    sx={{ width: 56, height: 56 }}
                  />
                ) : (
                  <Avatar sx={{ width: 56, height: 56 }}></Avatar>
                )}
                <Typography variant="h5" style={{ fontWeight: "bold" }}>
                  {review.author}
                </Typography>
              </div>
              <Typography variant="body1">{review.content}</Typography>
            </Paper>
          </ThemeProvider>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
