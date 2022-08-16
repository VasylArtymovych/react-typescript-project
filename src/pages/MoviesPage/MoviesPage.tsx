import { useEffect, useState, FC } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { searchMovie } from "serverAPI";
import SearchForm from "components/SearchForm";
import MoviesList from "components/MoviesList";
import Pagination from "components/Pagination";
import { IMovie } from "types";
import { Container } from "components/Container";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setTotalPages, setPage } from "redux/moviesSlice";

const MoviesPage: FC = () => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const name: string = urlSearchParams.get("search") ?? "";
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [queryName, setQueryName] = useState<string>(name);
  const { page } = useAppSelector((state) => state.page);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchMovesByName() {
      try {
        const { results, totalPages } = await searchMovie(queryName, page);
        if (results.length === 0) {
          toast.info(`Movie with name: ${queryName} not found!`);
          setMovies([]);
          return;
        }
        setMovies(results);
        dispatch(setTotalPages(totalPages));
      } catch (error: any) {
        toast.error(error.message);
      }
    }
    if (!queryName) {
      return;
    }
    fetchMovesByName();
  }, [dispatch, page, queryName]);

  const onSubmitForm = (name: string) => {
    setQueryName(name);
    setUrlSearchParams(name !== "" ? { search: name } : {});
    dispatch(setPage(1));
  };

  return (
    <Container>
      <SearchForm onSubmit={onSubmitForm} />
      <MoviesList moviesArr={movies} />
      {movies.length > 0 && <Pagination />}
    </Container>
  );
};

export default MoviesPage;
