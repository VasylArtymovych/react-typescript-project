import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMoviesResponse, IMovie, IReview, ICast } from "types";

const api_key = "9c009c00402fb866baf05bd346a2d01d";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query<IMoviesResponse, string>({
      query: (page) => `trending/movie/day?api_key=${api_key}&page=${page}`,
    }),
    getMoviesByName: builder.query<
      IMoviesResponse,
      { query: string; page: number }
    >({
      query: (args) => {
        const { query, page } = args;
        return {
          url: `search/movie?`,
          params: {
            api_key,
            query,
            page,
            language: "en-US",
          },
        };
      },
    }),
    getMovieById: builder.query<IMovie, string>({
      query: (id) => {
        return {
          url: `movie/${id}?`,
          params: {
            api_key,
            language: "en-US",
          },
        };
      },
    }),
    getMovieCast: builder.query<ICast[], string>({
      query: (id) => {
        return {
          url: `movie/${id}/credits?`,
          params: {
            api_key,
            language: "en-US",
          },
        };
      },
      transformResponse: (response: { cast: ICast[] }) => response.cast,
    }),
    getMovieReview: builder.query<IReview[], string>({
      query: (id) => {
        return {
          url: `movie/${id}/reviews?`,
          params: {
            api_key,
            language: "en-US",
          },
        };
      },
      transformResponse: (response: { results: IReview[] }) => response.results,
    }),
  }),
});

export const {
  useGetTrendingMoviesQuery,
  useGetMoviesByNameQuery,
  useGetMovieByIdQuery,
  useGetMovieCastQuery,
  useGetMovieReviewQuery,
} = moviesApi;
