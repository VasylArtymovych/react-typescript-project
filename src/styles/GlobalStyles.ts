import { createGlobalStyle } from "styled-components";
import BgrImg from "images/MovieBgr.jpg";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  *, 
  ::before,
  ::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    height: 100vh;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
    font-family:'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
   
    background-color: grey;
    /* background-image: url(${BgrImg}); */
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  .root{
    background-image: url('../images/MovieBgr.jpg');
  }
`;
export default GlobalStyles;
