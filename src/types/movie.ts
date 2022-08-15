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
