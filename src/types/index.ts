export interface IMovie {
  id: number;
  title: string;
  original_name: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  genres: { id: number; name: string }[];
  vote_average: number;
}

export interface IMoviesResponse {
  page: number;
  total_pages: number;
  results: IMovie[];
  total_results: number;
}

export interface ICast {
  cast_id: number;
  name: string;
  profile_path: string;
  character: string;
}
export interface ICastResponse {
  cast: ICast[];
  id: number;
}

export interface IReview {
  id: string;
  author: string;
  content: string;
}

export interface IReviewResponse {
  id: number;
  cast: IReview[];
  page: number;
  total_pages: number;
}
