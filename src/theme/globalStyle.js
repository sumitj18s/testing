import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./index";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    font-size: ${theme.base.fontSize};
    height: 100%;
  }

  body {    
    background-color: ${theme.base.backgroundColor};
    font-size: ${theme.fontSize.body};
    height: 100%;
    line-height: ${theme.base.lineHeight};
    
  }

  h1 {
    font-size: ${theme.fontSize.h1};
  }
 
  h2 {
    font-size: ${theme.fontSize.h2};
  }
  h3 {
    font-size: ${theme.fontSize.h3};
  }
 

`;

export default GlobalStyle;
