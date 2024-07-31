import axios from "axios";
import { Movie } from "./interface";

export async function getAPIData(
  type: string,
  time_window: string,
  setMovieData: React.Dispatch<React.SetStateAction<Movie[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const apiKey = "aab3bd8835a4ee8ea100227c2e4cfe3d";
    let resp = await axios.get(
      `https://api.themoviedb.org/3/trending/${type}/${time_window}?api_key=${apiKey}&media_type=/${type}`
    );

    setMovieData(resp.data.results);
    setLoading(false); // Update loading state
  } catch (error) {
    console.error("Error fetching movie data:", error);
    setLoading(false); // Ensure loading state is updated even in case of an error
  }
}

export const handleWheel = (
  event: React.WheelEvent<HTMLDivElement>,
  scrollTimeoutRef: React.MutableRefObject<number | null>,
  containerRef: React.RefObject<HTMLDivElement>
) => {
  if (containerRef.current) {
    containerRef.current.scrollLeft += event.deltaY;
    event.preventDefault();

    // Debounce scroll events
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      scrollTimeoutRef.current = null;
    }, 10); // Adjust debounce delay as needed
  }
};
