import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from 'components/router';
import Root from 'components/Root';
import { GlobalStyle, theme } from 'styledSetup';
import NavBar from 'components/layout/NavBar';

function App() {
  return (
    <Root>
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <NavBar />
            <Router />
          </React.Fragment>
        </ThemeProvider>
      </React.Fragment>
    </Root>
  );
}

export default App;
