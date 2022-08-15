import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchTrending } from "serverAPI";
import Title from "components/Title";
import MoviesList from "components/MoviesList";
import { Container } from "./HomePage.styled";
import Pagination from "components/Pagination";
import usePagination from "hooks/usePagination";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));

  const { currentPage, totalPages, setTotalPages, onBtnClick } = usePagination(
    page ? page : 1
  );

  useEffect(() => {
    async function fetchMovies() {
      try {
        const { results, totalPages } = await fetchTrending(currentPage);
        setMovies(results);
        setTotalPages(totalPages);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
    fetchMovies();
  }, [setTotalPages, currentPage]);

  return (
    <Container>
      <Title>Trending Today</Title>
      <MoviesList moviesArr={movies} />
      {movies.length > 1 && (
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onClick={onBtnClick}
        />
      )}
    </Container>
  );
};

export default HomePage;
