import { Outlet, useParams } from "react-router-dom";
import { Suspense } from "react";
import { toast } from "react-toastify";
import MovieCard from "components/MovieCard/MovieCard";
import { LoaderOval } from "components/Loader";
import { Container } from "components/Container";
import { useGetMovieByIdQuery } from "redux/moviesAPI";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { data, isLoading, error } = useGetMovieByIdQuery(movieId ?? "", {
    skip: movieId === "undefind",
  });

  if (error) {
    toast("The resource you requested could not be found.");
  }

  return (
    <>
      {isLoading && <LoaderOval />}
      {data ? (
        <Container>
          <MovieCard movie={data} />
        </Container>
      ) : null}

      <Suspense fallback={<LoaderOval />}>
        <Outlet context={movieId} />
      </Suspense>
    </>
  );
}
