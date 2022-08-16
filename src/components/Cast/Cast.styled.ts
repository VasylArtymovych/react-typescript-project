import styled from "styled-components";

export const CasList = styled("ul")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  padding: 0px 0px 20px 0px;
  list-style: none;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(7, 1fr);
  }
  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${(p) => p.theme.space[2]}px;
    font-size: ${(p) => p.theme.fontSizes.s}px;
    text-align: center;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.background};
    & img {
    }
  }
`;
