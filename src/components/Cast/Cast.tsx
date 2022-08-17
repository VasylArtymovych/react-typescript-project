import { useOutletContext } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { toast } from "react-toastify";
import defaultPhoto from "images/default.jpeg";
import { CasList } from "./Cast.styled";
import { Container } from "components/Container";
import { LoadingLine } from "components/Loader";
import { useGetMovieCastQuery } from "redux/moviesAPI";

const IMG_PATH = "https://image.tmdb.org/t/p/w500";

export default function Cast() {
  const movieId: string = useOutletContext();
  const { data: cast, isLoading, error } = useGetMovieCastQuery(movieId);

  if (cast) {
    animateScroll.scrollMore(250);
  }

  if (error) {
    toast("The resource you requested could not be found.");
  }

  return (
    <Container>
      {isLoading && <LoadingLine />}
      {cast && (
        <CasList>
          {cast.map(({ cast_id, name, profile_path, character }) => {
            const imgPath = profile_path
              ? IMG_PATH + profile_path
              : defaultPhoto;
            return (
              <li key={cast_id}>
                <img src={imgPath} alt={name} width="105" height="140" />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </CasList>
      )}
    </Container>
  );
}
