import { css, DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  color: {
    main: "#A77CFD",
    sub: "#D3BEFE",
    black: "#000000",
    white: "#ffffff",
    bgColor: "#FDFCFF",
    redPoint: "#FF4926",
  },
  size: {
    width: css`
      width: 80vw;
      min-width: 320px;
      max-width: 800px;
    `.join("\n"),
    navHeight: "6rem",
    radius: "1.6rem",
  },
  shadow: {
    light: `box-shadow: 0 0 1rem 0 rgba(100, 100, 100, 0.1)`,
  },
} as const;

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      sub: string;
      black: string;
      white: string;
      bgColor: string;
      redPoint: string;
    };
    size: {
      /** width, max-width, min-width */
      width: string;
      navHeight: string;
      radius: string;
    };
    shadow: {
      light: string;
    };
  }
}

export default mainTheme;
