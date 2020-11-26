import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing:border-box
  }

  body {
    padding: 0;
    margin: 80px auto;
    width: 90%;

    @media (min-width: 800px) {
      padding: 80px 65px 0;
      margin: 0;
      width: 100%;
  }

  }

  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: "Montserrat", 'Open Sans';
  }
`

export default GlobalStyle
