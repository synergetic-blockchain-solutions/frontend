// Step 1 get the redux store to send requests and perform
// the request in the middleware (DONE)
// Step 2 get it to refresh the token when it gets an error (DONE)
// Step 3 eliminate refresh request clashes (IN PROGRESS)
import qs from 'query-string';
import axios from 'axios';
import attemptRefresh from '../utils/attemptRefresh';
import { attemptTokenRefresh, logoutUser } from '../actions/auth';
import { CALL_API } from '../actions/types';

// The root call for all the api requests

export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  // Get the data of the call
  const {
    endpoint,
    method,
    body,
    query,
    headers = {},
    onUploadProgress,
  } = callAPI;

  // Get the types of the call
  const { types } = callAPI;

  // Define the content type
  headers['Content-Type'] = 'application/json';

  // Get the token from the store
  const { auth } = store.getState();
  let token;
  if (auth.token) {
    token = axios.defaults.headers.common.Authorization;
  }

  // Define the final action
  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  };

  // Send the request to the next middleware
  const [requestType, successType, failureType] = types;

  next(actionWith({ type: requestType }));

  // if (body && headers['Content-Type'] !== 'multipart/form-data') {
  //   body = JSON.stringify(body);
  // }

  let handleUploadProgress;
  if (onUploadProgress) {
    handleUploadProgress = progressEvent =>
      store.dispatch(onUploadProgress(progressEvent));
  } else {
    handleUploadProgress = null;
  }

  let queryString = '';
  if (query) {
    queryString = `?${qs.stringify(query)}`;
  }

  return axios({
    method,
    url: `${process.env.REACT_APP_API_URL}${endpoint}${queryString}`,
    headers,
    onUploadProgress: handleUploadProgress,
    data: body,
  })
    .then(createFSAConverter(successType, failureType, store.dispatch))
    .catch(
      attemptRefresh({
        action,
        refreshActionCreator: attemptTokenRefresh,
        next,
        store,
        token,
        failureType,
        failure: logoutUser,
      })
    );
};

export const createFSAConverter = (
  successType,
  failureType,
  dispatch
) => response => {
  // define the failuretype for the request
  if (
    !(
      response.statusText === 'OK' ||
      response.statusText === 'ok' ||
      response.statusText === 'Created' ||
      response.status === 200 ||
      response.status === 201
    )
  ) {
    return dispatch({
      payload: {
        status: response.status,
      },
      type: failureType,
    });
  }

  const contentType = response.headers['content-type'];
  const emptyCodes = [204, 205];

  // define the success type for the request
  const createSuccessType = payload =>
    dispatch({
      payload,
      type: successType,
    });

  // check if the request was successful and something was send back from api
  if (
    emptyCodes.indexOf(response.statusText) === -1 &&
    contentType &&
    contentType.indexOf('json') !== -1
  ) {
    return createSuccessType(response.data);
  } else if (response.data) {
    return createSuccessType(response.data);
  }
  return createSuccessType();
};
