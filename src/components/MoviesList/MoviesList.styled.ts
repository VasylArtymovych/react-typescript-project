import styled from 'styled-components';
import { TbMovie } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

export const List = styled('ul')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(300px, auto);
  grid-gap: 20px;
  list-style: none;

  & li {
    padding: ${p => p.theme.space[2]}px;
    border-radius: ${({ theme }) => theme.radii.normal};
    background: #fff;
    box-shadow: rgba(255, 111, 80, 0.25) 0px 54px 55px,
      rgba(255, 111, 80, 0.12) 0px -12px 30px,
      rgba(255, 111, 80, 0.12) 0px 4px 6px,
      rgba(255, 111, 80, 0.17) 0px 12px 13px,
      rgba(255, 111, 80, 0.09) 0px -3px 5px;
  }

  & li:hover {
    transform: scale(1.05);
  }

  & li a {
    text-decoration: none;
    color: ${p => p.theme.colors.text};
  }
`;

export const TextWraper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: ${p => p.theme.fontSizes.m}px;
  & p {
    text-align: center;
  }
`;

export const Icon = styled(TbMovie)`
  margin-right: 5px;
`;

export const StyledLink = styled(NavLink)`
  &:hover:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;

// export const List = styled('ul')`
//   list-style: none;
//   list-style-position: inside;
//   font-size: ${p => p.theme.fontSizes.m}px;
//   & li {
//     display: flex;
//     align-items: center;
//     padding: ${p => p.theme.space[2]}px;
//   }
//   & li:nth-child(odd) {
//     background: rgb(222, 208, 172);
//   }

//   & li a {
//     display: flex;
//     align-items: center;
//     color: ${p => p.theme.colors.text};
//   }

//   & li img {
//     display: block;
//     margin-right: 10px;
//   }
// `;

// export const Icon = styled(TbMovie)`
//   margin-right: 5px;
// `;

// export const StyledLink = styled(NavLink)`
//   &:hover:not(.active) {
//     color: ${p => p.theme.colors.accent};
//   }
// `;
