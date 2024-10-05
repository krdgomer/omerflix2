import Header from "../../Components/Shared/Header/Header";
import "./moviepage.css";
import { getMovieByID } from "../../util/api";
import { useEffect, useState } from "react";
import { Movie } from "../../util/interface";
import { useParams } from "react-router-dom";
import MovieSummary from "../../Components/MoviePage/MovieSummary";
import ReviewsMovie from "../../Components/MoviePage/ReviewsMovie/ReviewsMovie";

function MoviePage() {
  const [movie, setMovie] = useState<Movie | null>(null);

  const { movieId } = useParams();

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
        <MovieSummary movie={movie} />
      </div>
      <ReviewsMovie movieId={movie.id.toString()} />
    </div>
  );
}

export default MoviePage;
