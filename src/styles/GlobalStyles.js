import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #f7f8fa;
    color: #333;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
