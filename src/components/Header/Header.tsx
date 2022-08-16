import { FC } from "react";
import routePaths from "routeSettings";
import { Section, Container, StyledLink } from "./Header.styled";
import { useAppDispatch } from "redux/hooks";
import { setPage } from "redux/moviesSlice";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const onClick: React.MouseEventHandler<HTMLElement> = () => {
    dispatch(setPage(1));
  };
  return (
    <Section>
      <Container>
        <StyledLink to={routePaths.home} onClick={onClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Home
        </StyledLink>
        <StyledLink to={routePaths.movies} onClick={onClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Movies
        </StyledLink>
      </Container>
    </Section>
  );
};

export default Header;
