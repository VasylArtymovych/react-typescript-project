import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled('div')`
  width: 100%;
  padding: ${({ theme }) => theme.space[5]}px;
  padding-top: 0;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Title = styled('h3')`
  padding: 5px 10px;
  margin-top: 0;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  background: linear-gradient(to top left, rgb(16, 15, 60), rgb(85, 204, 225));
  border-bottom: 1px solid ${p => p.theme.colors.accent};
`;

export const StyledLink = styled(NavLink)`
  display: block;
  margin: 5px 20px;
  color: ${p => p.color || p.theme.colors.white};

  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;
