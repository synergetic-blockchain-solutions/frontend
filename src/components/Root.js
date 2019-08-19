import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import jwtDecode from 'jwt-decode';
import api from 'middlewares/api';
import rootReducer from 'reducers';
import { setCurrentUser } from 'actions/auth';
import setAuthToken from 'utils/setAuthToken';
import CacheBuster from 'components/CacheBuster';

const Root = ({ children, initialState }) => {
  const middleware = [thunk, api];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger());
    console.log(
      `${process.env.REACT_APP_NAME} ${process.env.REACT_APP_VERSION}`
    );
    // const { whyDidYouUpdate } = require('why-did-you-update');
    // whyDidYouUpdate(React);
  }

  const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

  const store = createStore(
    rootReducer,
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
    <CacheBuster>
      {({ loading, isLatestVersion, refreshCacheAndReload }) => {
        if (loading) return null;
        if (!loading && !isLatestVersion) {
          // You can decide how and when you want to force reload
          refreshCacheAndReload();
        }
        return (
          <Provider store={store}>
            <BrowserRouter>{children}</BrowserRouter>
          </Provider>
        );
      }}
    </CacheBuster>
  );
};

Root.propTypes = {
  initialState: PropTypes.shape({
    auth: PropTypes.object,
    messaging: PropTypes.object,
    tutoring: PropTypes.object,
    sessions: PropTypes.object,
    questions: PropTypes.object,
  }),
};

export default Root;
