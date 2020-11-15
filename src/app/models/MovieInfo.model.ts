export interface MovieInfo {
  adult: boolean;
  backdrop_path: string;
  genres: { name: string };
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  runtime: number;
  spoken_languages: {};
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}
