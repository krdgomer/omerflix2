import axios from "axios";
import { Movie } from "./interface";

export async function getAPIData(
  type: string,
  time_window: string,
  setMovieData: React.Dispatch<React.SetStateAction<Movie[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const apiKey = "892605bbbb13e13ee0aec2421e215075";
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

export async function getMovieByID(id: string | undefined) {
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTI2MDViYmJiMTNlMTNlZTBhZWMyNDIxZTIxNTA3NSIsIm5iZiI6MTcyMjc5Njc0Ni4xNjI5NDcsInN1YiI6IjY2MDMwMjZmMGMxMjU1MDE3ZTEyM2I4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fFQmabjmmNexIdpbJErkukFcNG8ktzKALw2QiSYcmdE";
  const url = `https://api.themoviedb.org/3/movie/${id}`;
  const options = {
    method: "GET",
    url: url,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data; // Return the movie data
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error; // Rethrow the error so it can be handled by the calling function
  }
}
