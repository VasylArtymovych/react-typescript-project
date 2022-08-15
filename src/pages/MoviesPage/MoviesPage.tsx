import { useEffect, useState, FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import { searchMovie } from 'serverAPI';
import MoviesList from 'components/MoviesList';
import { toast } from 'react-toastify';
import Pagination from 'components/Pagination';
import usePagination from 'hooks/usePagination';
import { IMovie } from 'types';
import { Container } from './MoviesPage.styled';

const MoviesPage: FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [queryName, setQueryName] = useState<string>('');
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const page = Number(urlSearchParams.get('page'));
  const { currentPage, totalPages, setTotalPages, onBtnClick } = usePagination(
    page ? page : 1
  );

  useEffect(() => {
    async function fetchMovesByName() {
      try {
        const { results, totalPages } = await searchMovie(
          queryName,
          currentPage
        );
        if (results.length === 0) {
          toast.info(`Movie with name: ${queryName} not found!`);
          setMovies([]);
          return;
        }
        setMovies(results);
        setTotalPages(totalPages);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
    if (!queryName) {
      return;
    }
    fetchMovesByName();
  }, [currentPage, queryName, setTotalPages]);

  const onSubmitForm = (name: string) => {
    setQueryName(name);
    setUrlSearchParams(name !== '' ? { search: name } : {});
  };

  return (
    <Container>
      <SearchForm onSubmit={onSubmitForm} />
      <MoviesList moviesArr={movies} />
      {movies.length > 0 && (
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          onClick={onBtnClick}
        />
      )}
    </Container>
  );
};

export default MoviesPage;
