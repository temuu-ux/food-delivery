import { ThemeProvider, createTheme } from "@mui/material";

import { ReactNode } from "react";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 660,
      lg: 1258,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#18BA51",
      dark: "#000000",
      light: "#FFFFFF",
    },
    secondary: {
      main: "#272727",
    },
  },
  typography: {
    subtitle1: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: 700,
    },
    h5: {
      fontSize: 22,
      fontStyle: "normal",
      fontWeight: 700,
    },
    h1: {
      fontSize: 55,
      fontStyle: "normal",
      fontWeight: 600,
    },
    h2: {
      fontSize: 22,
      fontStyle: "normal",
      fontWeight: 500,
    },
    h3: {
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: 700,
    },
    h4: {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: 400,
    },
    h6:{
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: 600,
    }
  },
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
