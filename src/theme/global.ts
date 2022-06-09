import { createGlobalStyle } from 'styled-components';

import { ThemeType } from './index';

export default createGlobalStyle<{ theme: ThemeType }>`
  html,
  body {
    font-family: Poppins, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    overflow-y: auto;
    min-height: 100%;
    max-width: 100%;
    display: flex;
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1;
    align-items: stretch;
     ${({ theme }) => theme.fonts.primaryStyle};
    color: ${({ theme }) => theme.colors.blueDianne};
    background-color: ${({ theme }) => theme.colors.zircon};
  }

  h1 {
    margin: 0;
    ${({ theme }) => theme.fonts.h1Style};
  }
  h2 {
    margin: 0;
    ${({ theme }) => theme.fonts.h2Style};
  }
  h3 {
    margin: 0;
    ${({ theme }) => theme.fonts.h3Style};
  }
  p {
    margin: 0;
    ${({ theme }) => theme.fonts.pStyle};
  }

  button {
    margin:0;
  }

  #root {
    display: flex;
    min-height: 100%;
    min-width: 100%;
  }
`;
