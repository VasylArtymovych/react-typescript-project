import { FC } from 'react';
import routePaths from 'routeSettings';
import { Section, Container, StyledLink } from './Header.styled';

const Header: FC = () => {
  return (
    <Section>
      <Container>
        <StyledLink to={routePaths.home}>Home</StyledLink>
        <StyledLink to={routePaths.movies}>Movies</StyledLink>
      </Container>
    </Section>
  );
};

export default Header;
