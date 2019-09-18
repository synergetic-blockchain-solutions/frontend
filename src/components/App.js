import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Router from 'components/router';
import Root from 'components/Root';
import { GlobalStyle, theme } from 'styledSetup';
import NavBar from 'components/layout/NavBar';
import Window from 'components/layout/Window';

class App extends Component {
  render() {
    return (
      <Root>
        <React.Fragment>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <React.Fragment>
                <NavBar />
                <Window>
                  <Router />
                </Window>
              </React.Fragment>
            </BrowserRouter>
          </ThemeProvider>
        </React.Fragment>
      </Root>
    );
  }
}

export default App;
