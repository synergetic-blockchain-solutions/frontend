import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from 'components/router';
import Root from 'components/Root';
import { GlobalStyle, theme } from 'styledSetup';

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
