import { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  InfoContainer,
  ImgWraper,
  TextWraper,
  MovieTitle,
  StyledText,
  StyledSpan,
  List,
  GoBackBtn,
} from "./MovieCard.styled";
import defaultImg from "images/default.jpeg";
import { IMovie } from "types";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";

interface IMovieCardProps {
  movie: IMovie;
}

// interface IState {
//   from: { pathname: string };
// }

// interface ILocation {
//   state: IState;
// }

const MovieCard: FC<IMovieCardProps> = ({ movie }) => {
  const { backdrop_path, poster_path, title, overview, genres, vote_average } =
    movie;
  const navigate = useNavigate();
  const location: any = useLocation();

  const imgPath =
    backdrop_path || poster_path
      ? IMG_PATH + (poster_path ?? backdrop_path)
      : defaultImg;

  return (
    <Container>
      <GoBackBtn
        type="button"
        onClick={() => {
          // navigate(-1);
          navigate(location?.state?.from ?? "/movies");
        }}
      >
        Go back
      </GoBackBtn>
      <InfoContainer>
        <ImgWraper>
          <img src={imgPath} alt={title} />
        </ImgWraper>
        <TextWraper>
          <MovieTitle>{title}</MovieTitle>
          <StyledText>
            <StyledSpan>User score:</StyledSpan> {Math.round(vote_average * 10)}
            %
          </StyledText>
          <StyledText>
            <StyledSpan>Overview:</StyledSpan> {overview}
          </StyledText>
          <StyledSpan>genres:</StyledSpan>
          <List>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </List>
        </TextWraper>
      </InfoContainer>
    </Container>
  );
};

export default MovieCard;
