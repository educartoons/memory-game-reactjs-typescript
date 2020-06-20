import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body{
    margin: 0;
    padding: 0;
  }
  body{
    background-color: #b6cde8;
    font-family: 'Source Sans Pro', sans-serif;
    min-height: 100vh;
  }
  h2{
    font-size: 2em;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
  }
  p{
    text-align: center;
    font-size: 2em;
    font-weight: 600;
  }
`;

export default GlobalStyles;
