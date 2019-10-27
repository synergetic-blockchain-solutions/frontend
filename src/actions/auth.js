import {
  CALL_API,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  GET_MYSELF_REQUEST,
  GET_MYSELF_SUCCESS,
  GET_MYSELF_FAILURE,
  UPDATE_USER_DATA_REQUEST,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_FAILURE,
  GET_USER_BY_NAME_REQUEST,
  GET_USER_BY_NAME_SUCCESS,
  GET_USER_BY_NAME_FAILURE,
  SET_CURRENT_USER,
  TOKEN_REFRESH_SUCCESS,
  TOKEN_REFRESH_REQUEST,
  TOKEN_REFRESH_FAILURE,
  SAVE_REFRESH_TOKEN_PROMISE,
  CLEAR_REFRESH_TOKEN_PROMISE,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  CLEAR_ERRORS,
  CLEAR_SUCCESS,
  CLEAR_AUTH,
} from 'actions/types';
import { CLEAR_USER_BY_NAME } from './types';

/**
 * @route /register
 * @method POST
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @param {string} confirmPassword
 * @desc create an account for  user
 */
export const registerUser = (name, email, password) => ({
  [CALL_API]: {
    endpoint: '/register',
    method: 'POST',
    body: {
      name: name,
      email: email,
      password: password,
    },
    types: [REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE],
  },
});

/**
 * @route /login
 * @method POST
 * @param {string} email
 * @param {password} password
 * @desc login the user
 */
export const loginUser = (email, password) => ({
  [CALL_API]: {
    endpoint: '/login',
    method: 'POST',
    body: {
      email,
      password,
    },
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
  },
});

/**
 * @route /login
 * @method POST
 * @param {string} email
 * @param {password} password
 * @desc login the user
 */
export const deleteUser = id => ({
  [CALL_API]: {
    endpoint: `/user/${id}`,
    method: 'DELETE',
    types: [DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE],
  },
});

/**
 * @route /user/me
 * @method GET
 * @desc get the user data
 */
export const getUsersOwnData = () => ({
  [CALL_API]: {
    endpoint: '/user/me',
    method: 'GET',
    types: [GET_MYSELF_REQUEST, GET_MYSELF_SUCCESS, GET_MYSELF_FAILURE],
  },
});

/**
 * @route /user?name&email
 * @method GET
 * @desc get users matching the search
 */
export const getUserByName = search => ({
  [CALL_API]: {
    endpoint: '/user',
    method: 'GET',
    query: {
      name: search,
    },
    types: [
      GET_USER_BY_NAME_REQUEST,
      GET_USER_BY_NAME_SUCCESS,
      GET_USER_BY_NAME_FAILURE,
    ],
  },
});

export const clearUserSearch = () => ({
  type: CLEAR_USER_BY_NAME,
});

/**
 * @route /user/:id
 * @method PUT
 * @desc get the user data
 */
export const updateUserData = (id, email, name, groups) => ({
  [CALL_API]: {
    endpoint: `/user/${id}`,
    method: 'PUT',
    body: {
      email,
      name,
      groups,
    },
    types: [
      UPDATE_USER_DATA_REQUEST,
      UPDATE_USER_DATA_SUCCESS,
      UPDATE_USER_DATA_FAILURE,
    ],
  },
});

/**
 * @route /api/logout
 * @method POST
 * @param none
 * @desc logout the user
 */
export const logoutUser = () => ({
  type: LOGOUT_SUCCESS,
});

/**
 * @route /api/refresh
 * @method POST
 * @param none
 * @desc refresh the token for the user
 */
export const attemptTokenRefresh = () => ({
  [CALL_API]: {
    endpoint: '/refresh',
    method: 'POST',
    types: [
      TOKEN_REFRESH_REQUEST,
      TOKEN_REFRESH_SUCCESS,
      TOKEN_REFRESH_FAILURE,
    ],
  },
});

/**
 * @param {object} token
 * @param {object} user
 * @desc gets the token and user information
 * from localstorage and then sets them both in
 * the redux state
 */
export const setCurrentUser = ({ token, user }) => ({
  type: SET_CURRENT_USER,
  token,
  user,
});

/**
 * @param none
 * @desc clear the promised that was saved to state
 * from trying to refresh the authentication token
 */
export const clearRefreshTokenPromise = () => ({
  type: CLEAR_REFRESH_TOKEN_PROMISE,
});

/**
 *
 * @param promise
 * @desc save the refresh token promise in the state so
 * that if refresh token requests were sent
 * at the same time they wont work over eachother
 */
export const saveRefreshTokenPromise = promise => ({
  type: SAVE_REFRESH_TOKEN_PROMISE,
  promise,
});

/**
 * @desc clear the errors of the redux state
 */
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

/**
 * @desc clear the success messages of the redux state
 */
export const clearSuccess = () => ({
  type: CLEAR_SUCCESS,
});

/**
 * @desc clear auth state
 */
export const clearAuth = () => ({
  type: CLEAR_AUTH,
});
