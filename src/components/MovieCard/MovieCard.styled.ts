import styled from "styled-components";

const Container = styled("div")`
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

const InfoContainer = styled("div")`
  display: flex;
  gap: 20px;
`;

const ImgWraper = styled("div")`
  @media (max-width: 768px) {
    width: 100%;
  }
  width: 20%;
  & img {
    display: block;
    width: 100%;
    object-fit: fill;
  }
`;

const TextWraper = styled("div")`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const MovieTitle = styled("h2")`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: 0 2px 4px ${({ theme }) => theme.colors.primary};
`;

const StyledText = styled("p")`
  margin-bottom: 7px;
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

const StyledSpan = styled("span")`
  color: rgb(16, 15, 60);
  font-weight: ${(p) => p.theme.fontWeights.bold};
`;

const List = styled("ul")`
  list-style: none;
  display: flex;
  margin-bottom: 10px;
  li {
    margin-right: 5px;
    font-size: 14px;
    color: ${(p) => p.theme.colors.accent};
  }
`;

const GoBackBtn = styled("button")`
  width: 65px;
  height: 30px;
  padding: ${(p) => p.theme.space[3]}px;
  margin-bottom: ${(p) => p.theme.space[4]}px;
  font-size: 12px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border: none;
  outline: none;
  border-radius: ${(p) => p.theme.radii.normal};
  color: ${(p) => p.theme.colors.primary};
  background: ${(p) => p.theme.colors.background};
  &:hover {
    background: ${(p) => p.theme.colors.reverseBackground};
    box-shadow: 0px 5px 15px ${(p) => p.theme.colors.primary};
  }
`;

export {
  Container,
  InfoContainer,
  ImgWraper,
  TextWraper,
  MovieTitle,
  StyledText,
  StyledSpan,
  List,
  GoBackBtn,
};
