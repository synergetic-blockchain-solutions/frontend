import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import jwtDecode from 'jwt-decode';
import api from 'middlewares/api';
import TestRootReducer from 'reducers';
import { setCurrentUser } from 'actions/auth';
import setAuthToken from 'utils/setAuthToken';
import { GlobalStyle, theme } from 'styledSetup';

const TestRoot = ({ children, initialState }) => {
  const middleware = [thunk, api];

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
    console.log(
      `${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`
    );
  }

  const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

  const store = createStore(
    TestRootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  // Check for token
  if (localStorage.user && localStorage.token) {
    // Decode token and get user info and exp
    const user = JSON.parse(localStorage.getItem('user'));
    let token = JSON.parse(localStorage.getItem('token'));
    const subjectTopics = JSON.parse(localStorage.getItem('subjectTopics'));

    // Set auth token header auth
    setAuthToken(token);

    token = jwtDecode(token);

    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(token, user, subjectTopics));
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

TestRoot.propTypes = {
  initialState: PropTypes.shape({
    auth: PropTypes.object,
    messaging: PropTypes.object,
    tutoring: PropTypes.object,
    sessions: PropTypes.object,
    questions: PropTypes.object,
  }),
};

export default TestRoot;