import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./constants/GlobalStyles.ts";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./constants/theme.ts";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Global styles={GlobalStyles} />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>
);
