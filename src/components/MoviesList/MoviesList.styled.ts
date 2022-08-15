import styled from "styled-components";

export const List = styled("ul")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(300px, auto);
  grid-gap: 20px;
  list-style: none;
`;
