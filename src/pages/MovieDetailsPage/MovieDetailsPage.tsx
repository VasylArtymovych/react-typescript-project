import { Outlet, useParams } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { toast } from "react-toastify";
import MovieCard from "components/MovieCard/MovieCard";
import { fetchMovieById } from "serverAPI";
import { LoaderOval } from "components/Loader";
import { Container } from "./MovieDetailsPage.styled";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

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
        <Container>
          <MovieCard movie={movie} />
        </Container>
      ) : (
        <LoaderOval />
      )}

      <Suspense fallback={<LoaderOval />}>
        <Outlet context={movieId} />
      </Suspense>
    </>
  );
}
