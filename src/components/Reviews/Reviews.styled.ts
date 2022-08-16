import styled from "styled-components";

const ReviewdList = styled("ul")`
  list-style: none;

  & li {
    padding: ${(p) => p.theme.space[2]}px;
  }
  & li:nth-child(odd) {
    background: rgb(222, 208, 172);
  }
`;
const ReviewdText = styled("p")`
  font-size: 12px;
  text-align: center;
  padding-bottom: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export { ReviewdList, ReviewdText };
