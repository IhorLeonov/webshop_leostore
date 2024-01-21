import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  colors: {
    black: "#060412",
    white: "#FFF",
    background: "#F9FAFF",
    lightBlack: "#3b434e",
    lightGray: "#d0cfcf",
    gray: "#7e7e7e",
    pink: "#eb3795",
    hover: "#eb3795",
    accent: "#2c7873",
  },
  palette: {
    primary: {
      main: "#0c113c",
      light: "#204ffe",
      dark: "#eb3795",
      contrastText: "#F9FAFF",
    },
  },
  transitions: {
    easing: {
      easeInOut: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
});
