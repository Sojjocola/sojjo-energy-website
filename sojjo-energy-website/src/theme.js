import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

const sojjoTheme = createTheme({
  palette: {
    primary: {
      main: "#77AD78",
      light: "#7DBA84",
      dark: "#77AD78",
    },
    secondary: {
      main: "#6F8F72",
      light: "#504B43",
      dark: "#6F8F72",
    },
    neutral: {
      dark: "#3d3d3d",
      main: "#666666",
      light: "#e0e0e0",
    },
    background: {
      default: "#2d2d2d",
    },
  },
  typography: {
    fontFamily: ["Space Grotesk", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});

export default sojjoTheme;
