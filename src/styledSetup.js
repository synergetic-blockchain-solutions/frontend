import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  background-color: #f0f0f0;
  box-sizing: border-box;
  font-family: 'Signika', sans-serif;
}

@media (max-width: 736px) {
  html {
    font-size: 50%;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 40%;
  }
}

`;

export const theme = {
  colors: {
    colorDarkBrown: '#B3723D',
    colorPrimaryLight: '#FFBE8A',
    colorPrimary: '#FFB170',
    colorDarkBlue: '#2B9FB3',
    colorLightBlue: '#70EAFF',
    colorWhite: '#fff',
    colorBlack: '#000',
    colorGrayLight2: '#b2b2b2',
    colorGrayMedium: '#e3e3e3',
    colorDanger: '#dc3545',
  },
  fonts: {
    fontFancy: "'Signika', sans-serif",
    fontStandard: "'Amiri', serif",
  },
  breakpoints: {
    largestScreen: '1690px',
    largeScreen: '1280px',
    mediumScreen: '980px',
    smallScreen: '736px',
    phoneScreen: '480px',
  }
};