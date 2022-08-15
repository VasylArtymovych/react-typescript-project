import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const api_key = "9c009c00402fb866baf05bd346a2d01d";
interface IParams {
  [x: string]: any;
};

export const fetchTrending = async (page: number) => {
  const response = await axios.get(
    "trending/all/day?" +
      new URLSearchParams({
        api_key,
        page,
      } as IParams)
  );

  const data = response.data;
  return {
    results: data.results,
    page: data.page,
    totalPages: data.total_pages,
  };
};

export const searchMovie = async (query: string, page: number = 1) => {
  const response = await axios.get(
    `search/movie?` +
      new URLSearchParams({
        api_key,
        query,
        language: "en-US",
        page: page,
        include_adult: false,
      } as IParams)
  );

  const data = response.data;
  return {
    results: data.results,
    page: data.page,
    totalPages: data.total_pages,
  };
};

export const fetchMovieById = async (id: any) => {
  const response = await axios.get(
    `movie/${id}?` +
      new URLSearchParams({
        api_key,
        language: "en-US",
      } as IParams)
  );

  const data = response.data;
  return data;
};

export const fetchMovieCast = async (id: string) => {
  const response = await axios.get(
    `movie/${id}/credits?` +
      new URLSearchParams({
        api_key,
        language: "en-US",
      } as IParams)
  );

  const data = response.data;
  return data;
};

export const fetchMovieReviews = async (id: string) => {
  const response = await axios.get(
    `movie/${id}/reviews?` +
      new URLSearchParams({
        api_key,
        language: "en-US",
        page: 1,
      } as IParams)
  );

  const data = response.data;
  return data;
};

