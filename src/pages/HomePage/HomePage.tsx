import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchTrending } from "serverAPI";
import Title from "components/Title";
import MoviesList from "components/MoviesList";
import { Container } from "./HomePage.styled";
import Pagination from "components/Pagination";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setTotalPages } from "redux/moviesSlice";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const { page } = useAppSelector((state) => state.page);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { results, totalPages } = await fetchTrending(page);
        setMovies(results);
        dispatch(setTotalPages(totalPages));
      } catch (error: any) {
        toast.error(error.message);
      }
    }
    fetchMovies();
  }, [dispatch, page]);

  return (
    <Container>
      <Title>Trending Today</Title>
      <MoviesList moviesArr={movies} />
      {movies.length > 1 && <Pagination />}
    </Container>
  );
};

export default HomePage;
