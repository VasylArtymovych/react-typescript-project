import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Title from "components/Title";
import MoviesList from "components/MoviesList";
import Pagination from "components/Pagination";
import { Container } from "components/Container";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setTotalPages } from "redux/moviesSlice";
import { useGetTrendingMoviesQuery } from "redux/moviesAPI";
import { LoadingLine } from "components/Loader";

const HomePage: React.FC = () => {
  const { page } = useAppSelector((state) => state.page);
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useGetTrendingMoviesQuery(page);

  useEffect(() => {
    if (data) {
      dispatch(setTotalPages(data.total_pages));
    }
  }, [data, dispatch]);

  if (error) {
    console.log(error);
    toast("TypeError: Failed to fetch");
  }
  return (
    <Container>
      <Title>Trending Today</Title>
      {isLoading && <LoadingLine />}
      {data && <MoviesList moviesArr={data.results} />}
      {data && data.results.length > 1 && <Pagination />}
    </Container>
  );
};

export default HomePage;
