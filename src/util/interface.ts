export interface Movie {
  name: string | undefined;
  vote_average: number | null | undefined;
  overview: string;
  title: string | undefined;
  poster_path: string;
  id: number;
  backdrop_path: string;
  // Add other properties if needed
}
