import { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Container,
  GoBackBtn,
  InfoContainer,
  ImgWraper,
  TextWraper,
  MovieTitle,
  TextWrap,
  StyledSpan,
  AddInfoWrap,
  Title,
  StyledLink,
} from "./MovieCard.styled";
import defaultImg from "images/default.jpeg";
import { IMovie } from "types";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";

interface IMovieCardProps {
  movie: IMovie;
}

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
    <Container as="section">
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
          <TextWrap>
            <StyledSpan>User score:</StyledSpan> {Math.round(vote_average * 10)}
            %
          </TextWrap>
          <TextWrap>
            <StyledSpan>Overview:</StyledSpan> {overview}
          </TextWrap>
          <TextWrap>
            <StyledSpan>genres:</StyledSpan>
            <>
              {genres.map(({ id, name }, i, arr) => {
                return i !== arr.length - 1 ? (
                  <p key={id}>{name + ","}</p>
                ) : (
                  <p key={id}>{name + "."}</p>
                );
              })}
            </>
          </TextWrap>
          <AddInfoWrap>
            <Title>Additional information</Title>
            <div>
              <StyledLink to="cast" state={{ from: location }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Cast
              </StyledLink>
              <StyledLink to="reviews" state={{ from: location }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Reviews
              </StyledLink>
            </div>
          </AddInfoWrap>
        </TextWraper>
      </InfoContainer>
    </Container>
  );
};

export default MovieCard;
