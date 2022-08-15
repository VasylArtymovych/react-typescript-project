import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { toast } from 'react-toastify';
import MovieCard from 'components/MovieCard/MovieCard';
import { fetchMovieById } from 'serverAPI';
import { LoaderOval } from 'components/Loader';
import { Title, StyledLink, Container } from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const movieData = await fetchMovieById(movieId);
        setMovie(movieData);
      } catch (error: any) {
        toast.error(error.message);
      }
    })();
  }, [movieId]);

  return (
    <>
      {movie ? (
      <div>
        <Container>
          <MovieCard movie={movie} />

          <Title>Additional information</Title>
          <div>
            <StyledLink to="cast" state={{ from: location }}>
              Cast
            </StyledLink>
            <StyledLink to="reviews" state={{ from: location }}>
              Reviews
            </StyledLink>
          </div>
        </Container>
      </div>
      ) : (
        <LoaderOval />
      )}

      <Suspense fallback={<LoaderOval />}>
        <Outlet context={movieId} />
      </Suspense>
    </>
  );
}
