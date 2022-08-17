import { createGlobalStyle } from "styled-components";
import background from "./background.png";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        background-image: url("${background}");
        background-attachment: fixed;
        font-family: "Noto Sans", sans-serif;
        display: grid;
        min-height: 100vh;
        align-items: center;
        justify-items: stretch;
    }
`;
