import { useLocation, generatePath } from 'react-router-dom';
import routePaths from 'routeSettings';
import { List, Icon, StyledLink, TextWraper } from './MoviesList.styled';
import { IMovie } from 'types';
import defaultImg from 'images/default .jpg';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

interface IProps {
  moviesArr: IMovie[];
}

const MoviesList: React.FC<IProps> = ({ moviesArr }) => {
  const location = useLocation();

  return (
    <List>
      {moviesArr.map(
        ({ id, title, original_name, backdrop_path, poster_path }) => {
          const movieLink = generatePath(routePaths.movie, {
            movieId: id,
          } as any);
          const imgPath =
            backdrop_path || poster_path
              ? IMG_PATH + (poster_path ?? backdrop_path)
              : defaultImg;
          return (
            <li key={id}>
              <StyledLink
                to={location.pathname === '/' ? movieLink : `${id}`}
                state={{ from: location }}
              >
                <img src={imgPath} alt="img" />
                <TextWraper>
                  <Icon />
                  <p>{title || original_name}</p>
                </TextWraper>
              </StyledLink>
            </li>
          );
        }
      )}
    </List>
  );
};

export default MoviesList;
