import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from 'components/router';
import Root from 'components/Root';

const GlobalStyle = createGlobalStyle`
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
}

`;

const theme = {
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
};

function App() {
  return (
    <Root>
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </React.Fragment>
    </Root>
  );
}

export default App;
