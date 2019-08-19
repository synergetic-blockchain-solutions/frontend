// intercept 401 errors and then resend the request that made the 401 error
import { CALL_API } from '../actions/types';
import {
  saveRefreshTokenPromise,
  // clearRefreshTokenPromise,
} from '../actions/auth';

export default settings => {
  const {
    action,
    refreshActionCreator,
    next,
    store,
    token,
    failureType,
    refreshReducerKey = 'auth',
    // failure
  } = settings;

  return err => {
    if (
      err.response &&
      err.response.status === 401 &&
      // The refresh endpoint could return a
      // 401 error so we skip if we have gotten
      // an error from the refresh call
      !isRefreshCall(action, refreshActionCreator()) &&
      // We shouldnt bother refreshing if there is no token
      typeof token === 'string' &&
      token.length > 0
    ) {
      // Check if there is already a dispatched call to refresh the token
      // if so we can queue the call until the refresh request completes
      let refreshPromise = store.getState()[refreshReducerKey]
        .refreshTokenPromise;
      if (!refreshPromise) {
        refreshPromise = store.dispatch(refreshActionCreator());
        // .then(next(clearRefreshTokenPromise()));

        next(saveRefreshTokenPromise(refreshPromise));
      }

      // When the promise is resolved send the request that has been waiting
      return refreshPromise.then(() => {
        store.dispatch(action);
      });
    }
    // If the refresh request has returned an error send a failure type
    return store.dispatch({
      type: failureType,
      payload: err.response,
    });
  };
};

// check if the action is a refresh call
const isRefreshCall = (act, refAct) =>
  act[CALL_API].endpoint === refAct[CALL_API].endpoint;
