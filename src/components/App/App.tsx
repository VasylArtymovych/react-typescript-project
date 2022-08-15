import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import "react-toastify/dist/ReactToastify.css";
import routePaths from "routeSettings";
import SharedLayout from "components/SharedLayout";

const HomePage = lazy(() => import("pages/HomePage"));
const MoviesPage = lazy(() => import("pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage"));
const Cast = lazy(() => import("components/Cast"));
const Reviews = lazy(() => import("components/Reviews"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={routePaths.home} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path={routePaths.movies} element={<MoviesPage />} />
        <Route path={routePaths.movie} element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Navigate to={routePaths.home} replace />} />
      </Route>
    </Routes>
  );
};

export default App;
