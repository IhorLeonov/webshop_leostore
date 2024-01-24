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

  @font-face {
    src: url("/fonts/Kanit/Kanit-Regular.ttf") format("truetype");

    font-family: "Kanit Regular";
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    src: url("/fonts/Kanit/Kanit-Medium.ttf") format("truetype");

    font-family: "Kanit Medium";
    font-weight: 500;
    font-display: swap;
  }

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    color: #3b434e;
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
