import styled from 'styled-components';

const Title = styled('h2')`
  margin-bottom: 15px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  text-shadow: 0 2px 4px orange;

  /* background-image: repeating-linear-gradient(
    -45deg,
    rgb(47, 44, 185),
    rgb(16, 15, 60) 15px,
    rgb(21, 138, 159) 15px,
    rgb(21, 138, 159) 30px
  ); */
`;

export default Title;
