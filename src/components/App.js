import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from 'components/router';
import Root from 'components/Root';
import { GlobalStyle, theme } from 'styledSetup';
import NavBar from 'components/layout/NavBar';
import Window from 'components/layout/Window';

function App() {
  return (
    <Root>
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <NavBar />
            <Window>
              <Router />
            </Window>
          </React.Fragment>
        </ThemeProvider>
      </React.Fragment>
    </Root>
  );
}

export default App;
