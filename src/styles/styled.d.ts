// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      text: string;
      title: string;
      active: string;
      background: string;
      primary: string;
      secondary: string;
      effects: string;
      accent: string;
      muted: string;
    };
    space: number[];
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    fontSizes: {
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
    };
    fontWeights: {
      normal: number;
      bold: number;
    };
    lineHeights: {
      body: number;
      heading: number;
    };
    borders: {
      none: string;
      normal: string;
      bold: string;
    };
    radii: {
      none: string;
      normal: string;
      round: string;
    };
  }
}
