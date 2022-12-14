import styled from "styled-components";

export const Container = styled("div")`
  width: 320px;
  padding: 0px ${({ theme }) => theme.space[5]}px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
