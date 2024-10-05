interface Media {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: Array<number>;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

export type Genre = {
  id: number;
  name: string;
};

export interface Movie extends Media {
  title: string | undefined;
  original_title: string;
  genre_ids: Array<number>;
  release_date: string;
  video: boolean;
  genres: Array<Genre>;
  runtime: number;
}

export interface Tv extends Media {
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: Array<string>;
}

type AuthorDetails = {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
};

export interface Review {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

// Type guard to check if apiResponse is of type Movie
export function isMovie(apiResponse: Movie | Tv): apiResponse is Movie {
  return (apiResponse as Movie).title !== undefined;
}

// Type guard to check if apiResponse is of type Tv
export function isTv(apiResponse: Movie | Tv): apiResponse is Tv {
  return (apiResponse as Tv).name !== undefined;
}
