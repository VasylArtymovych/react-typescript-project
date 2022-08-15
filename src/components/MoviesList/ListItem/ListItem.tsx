import { FC } from "react";
import { useLocation, generatePath } from "react-router-dom";
import routePaths from "routeSettings";
import { IMovie } from "types";
import defaultImg from "images/default .jpg";
import { Item, Icon, StyledLink, TextWraper, ImgWrap } from "./ListItem.styled";

const IMG_PATH = "https://image.tmdb.org/t/p/w500";

interface IListItemProps {
  movie: IMovie;
}

const ListItem: FC<IListItemProps> = ({ movie }) => {
  const location = useLocation();

  const movieLink = generatePath(routePaths.movie, {
    movieId: movie.id,
  } as any);

  const imgPath =
    movie.backdrop_path || movie.poster_path
      ? IMG_PATH + (movie.poster_path ?? movie.backdrop_path)
      : defaultImg;

  return (
    <Item>
      <StyledLink
        to={location.pathname === "/" ? movieLink : `${movie.id}`}
        state={{ from: location }}
      >
        <ImgWrap>
          <img src={imgPath} alt="img" />
        </ImgWrap>
        <TextWraper>
          <Icon />
          <p>{movie.title || movie.original_name}</p>
        </TextWraper>
      </StyledLink>
    </Item>
  );
};

export default ListItem;
