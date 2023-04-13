/* eslint-disable @typescript-eslint/no-unused-vars */
interface MovieRating {
  Source: string;
  Value: string;
}

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Rating: MovieRating[];
}

interface MovieDetails {
  Plot: string;
  Error?: string;
  Language: string;
  Rated: string;
  Ratings: MovieRating[];
  Genre: string;
  otherDetails: Object;
}

interface MappedMovieDetails {
  plot: string;
  language: string;
  rated: string;
  ratings: MovieRating[];
  genre: string;
  otherDetails: Object;
}

interface MovieResults {
  movies: null | Movie[];
  count: number;
  reason?: string;
}

interface APIResults {
  Search: Movie[];
  totalResults: number;
  Error?: string;
}

interface PreviousSearches {
  value: string;
  count: number;
}
