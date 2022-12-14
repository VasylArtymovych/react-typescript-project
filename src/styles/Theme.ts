import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  colors: {
    white: "#fff",
    text: "#000",
    title: "#0c0d37",
    active: "#fa5e06",
    background:
      "linear-gradient(to top right, rgb(16, 15, 60), rgb(85, 204, 225))",
    reverseBackground:
      "linear-gradient(to bottom left, rgb(16, 15, 60), rgb(85, 204, 225))",
    primary: "#03e9f4",
    secondary: "rgb(16, 15, 60)",
    accent: "orange",
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Arial, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    l: 32,
    xl: 64,
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: "none",
    normal: "1px solid",
    bold: "2px solid",
  },
  radii: {
    none: "0",
    normal: "5px",
    round: "50%",
  },
};
export { myTheme };
