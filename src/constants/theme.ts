import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  colors: {
    // black: "#060412",
    black: "#060412", // 2
    // black: "#20232a", // 3
    white: "#FFF",
    background: "#F9FAFF",
    lightBlack: "#3b434e",
    lightGray: "#d0cfcf",
    gray: "#7e7e7e",
    red: "#fc836d",
    hover: "#6fb98f",
    accent: "#2c7873",
  },
  palette: {
    // primary: {
    //   main: "#004445",
    //   light: "#2c7873",
    //   dark: "#021c1e",
    //   contrastText: "#F9FAFF",
    // },

    primary: {
      main: "#0c113c",
      light: "#204ffe",
      dark: "#eb3795",
      contrastText: "#F9FAFF",
    },
    // primary: {
    //   main: "#acbebe",
    //   light: "#f4f4ef",
    //   dark: "#a01d26",
    //   contrastText: "#F9FAFF",
    // },
  },
  transitions: {
    easing: {
      easeInOut: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
});
