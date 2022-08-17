import { useEffect, useState, FC } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import SearchForm from "components/SearchForm";
import MoviesList from "components/MoviesList";
import Pagination from "components/Pagination";
import { Container } from "components/Container";
import { LoadingLine } from "components/Loader";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { setTotalPages, setPage } from "redux/moviesSlice";
import { useGetMoviesByNameQuery } from "redux/moviesAPI";

const MoviesPage: FC = () => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const name: string = urlSearchParams.get("search") ?? "";
  const [queryName, setQueryName] = useState<string>(name);
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.page);

  const { data, isLoading, error } = useGetMoviesByNameQuery(
    {
      query: queryName,
      page,
    },
    {
      skip: queryName === "",
    }
  );
  useEffect(() => {
    if (data) {
      dispatch(setTotalPages(data.total_pages));
    }
  }, [data, dispatch]);

  if (error) {
    toast("The resource you requested could not be found.");
  }

  const onSubmitForm = (name: string) => {
    setQueryName(name);
    setUrlSearchParams(name !== "" ? { search: name } : {});
    dispatch(setPage(1));
  };

  return (
    <Container>
      <SearchForm onSubmit={onSubmitForm} />
      {isLoading && <LoadingLine />}
      {data && <MoviesList moviesArr={data.results} />}
      {data && data.results.length > 0 && <Pagination />}
    </Container>
  );
};

export default MoviesPage;
