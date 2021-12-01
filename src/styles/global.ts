import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-shadow: border-box;
    outline: none;
  }

  html, body, #root{
    height: 100vh;
  }

  body{
    font-family: 'Roboto', sans-serif;
  }
`;