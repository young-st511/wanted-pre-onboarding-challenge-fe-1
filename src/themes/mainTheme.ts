import { DefaultTheme } from "styled-components";

const mainTheme: DefaultTheme = {
  color: {
    main: "#C9AFFE",
    black: "#000000",
    white: "#ffffff",
    bgColor: "#FDFCFF",
    redPoint: "#FF4926",
  },
  size: {
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
      black: string;
      white: string;
      bgColor: string;
      redPoint: string;
    };
    size: {
      navHeight: string;
      radius: string;
    };
    shadow: {
      light: string;
    };
  }
}

export default mainTheme;