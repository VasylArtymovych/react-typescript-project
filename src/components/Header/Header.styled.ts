import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Section = styled('div')`
  width: 100vw;
  border-bottom: 3px solid ${(p: any) => p.theme.colors.accent};
  background: linear-gradient(to top right, rgb(16, 15, 60), rgb(85, 204, 225));
`;

const Container = styled('div')`
  width: 100%;
  padding: ${({ theme }) => theme.space[5]}px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  font-weight: ${(p: any) => p.theme.fontWeights.bold};
  margin-right: 15px;
  color: ${(p: any) => p.theme.colors.primary};

  &.active {
    color: ${(p: any) => p.theme.colors.active};
    text-decoration: underline;
  }
  &:hover:not(.active) {
    color: ${(p: any) => p.theme.colors.accent};
  }
`;
export { Container, StyledLink, Section };
