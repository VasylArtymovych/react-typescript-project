import styled from "styled-components";

const Title = styled("h2")`
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: 0 2px 4px ${({ theme }) => theme.colors.primary};
`;

export default Title;
