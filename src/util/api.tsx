import axios from "axios";
import { Movie, Tv } from "./interface";

export async function getTrendingMovies(
  time_window: string,
  setMovieData: React.Dispatch<React.SetStateAction<Movie[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const apiKey = "892605bbbb13e13ee0aec2421e215075";
    let resp = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/${time_window}?api_key=${apiKey}&media_type=/movie`
    );

    setMovieData(resp.data.results);
    setLoading(false); // Update loading state
  } catch (error) {
    console.error("Error fetching movie data:", error);
    setLoading(false); // Ensure loading state is updated even in case of an error
  }
}

export async function getTrendingTv(
  time_window: string,
  setTvData: React.Dispatch<React.SetStateAction<Tv[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  try {
    const apiKey = "892605bbbb13e13ee0aec2421e215075";
    let resp = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/${time_window}?api_key=${apiKey}&media_type=/movie`
    );

    setTvData(resp.data.results);
    setLoading(false); // Update loading state
  } catch (error) {
    console.error("Error fetching movie data:", error);
    setLoading(false); // Ensure loading state is updated even in case of an error
  }
}

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

export async function getTvByID(id: string | undefined) {
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTI2MDViYmJiMTNlMTNlZTBhZWMyNDIxZTIxNTA3NSIsIm5iZiI6MTcyMjc5Njc0Ni4xNjI5NDcsInN1YiI6IjY2MDMwMjZmMGMxMjU1MDE3ZTEyM2I4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fFQmabjmmNexIdpbJErkukFcNG8ktzKALw2QiSYcmdE";
  const url = `https://api.themoviedb.org/3/tv/${id}`;
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
    console.error("Error fetching tv data:", error);
    throw error; // Rethrow the error so it can be handled by the calling function
  }
}

export async function getReviewsByID(id: string | undefined) {
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTI2MDViYmJiMTNlMTNlZTBhZWMyNDIxZTIxNTA3NSIsIm5iZiI6MTcyMjc5Njc0Ni4xNjI5NDcsInN1YiI6IjY2MDMwMjZmMGMxMjU1MDE3ZTEyM2I4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fFQmabjmmNexIdpbJErkukFcNG8ktzKALw2QiSYcmdE";
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const options = {
    method: "GET",
    url: url,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data; // Return the movie data
  } catch (error) {
    console.error("Error fetching tv data:", error);
    throw error; // Rethrow the error so it can be handled by the calling function
  }
}
