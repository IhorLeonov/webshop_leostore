import "@emotion/react";
import { Theme as MyTheme } from "./src/types/interfaces";

declare module "@emotion/react" {
  interface Theme extends MyTheme {}
}

declare module "@mui/material/styles" {
  interface ThemeOptions extends MyTheme {}
}
