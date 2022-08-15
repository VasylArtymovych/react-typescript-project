import { FC } from 'react';
import routePaths from 'routeSettings';
import { Section, Container, StyledLink } from './Header.styled';

const Header: FC = () => {
  return (
    <Section>
      <Container>
        <StyledLink to={routePaths.home}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Home</StyledLink>
        <StyledLink to={routePaths.movies}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Movies</StyledLink>
      </Container>
    </Section>
  );
};

export default Header;
