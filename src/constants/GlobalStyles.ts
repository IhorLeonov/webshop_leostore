import { css } from "@emotion/react";
import "modern-normalize";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;

    margin-left: auto;
    margin-right: auto;

    max-width: 1440px;
    min-height: 100vh;

    font-family: "Roboto", sans-serif;
    color: #3b434e;
    background-color: #f9faff;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;
