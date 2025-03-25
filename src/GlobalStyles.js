import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body {
    overflow-x: hidden; /* Prevent horizontal scroll */
    background: linear-gradient(135deg, #001f3f, #003366);
    color: white;
    min-height: 100%;
    text-align: center;
    width: 100%;
  }
`;

export default GlobalStyles;
