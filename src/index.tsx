import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./constants/GlobalStyles.ts";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./constants/theme.ts";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Loader } from "./components/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Global styles={GlobalStyles} />
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
