import { useRef } from "react";
import { Movie } from "../../../util/interface";
import FilmCard from "../FilmCard/FilmCard";
import "./slidermovies.css";

type TrendingMoviesProps = {
  movieData: Movie[];
  handleWheel: (
    e: React.WheelEvent<HTMLDivElement>,
    scrollTimeoutRef: React.MutableRefObject<number | null>,
    containerRef: React.RefObject<HTMLDivElement>
  ) => void;
};

const SliderMovies: React.FC<TrendingMoviesProps> = ({
  movieData,
  handleWheel,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<any>(null);

  return (
    <div
      className="trending"
      ref={containerRef}
      onWheel={(e) => handleWheel(e, scrollTimeoutRef, containerRef)}
    >
      {movieData.map((movie, index) => (
        <FilmCard key={index} apiResponse={movie} />
      ))}
    </div>
  );
};

export default SliderMovies;
