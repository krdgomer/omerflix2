import axios from "axios";
import { Movie } from "./interface";

export async function getTrendingMovieData(
  type: string,
  setMovieData: React.Dispatch<React.SetStateAction<Movie[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const apiKey = "aab3bd8835a4ee8ea100227c2e4cfe3d";
    let resp = await axios.get(
      `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}&media_type=movie`
    );
    console.log(21, resp.data.results);

    setMovieData(resp.data.results);
    setLoading(false); // Update loading state
  } catch (error) {
    console.error("Error fetching movie data:", error);
    setLoading(false); // Ensure loading state is updated even in case of an error
  }
}
