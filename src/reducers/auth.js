import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setLocalStorage, removeLocalStorage } from '../utils/localStorage';

import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  TOKEN_REFRESH_SUCCESS,
  SAVE_REFRESH_TOKEN_PROMISE,
  CLEAR_REFRESH_TOKEN_PROMISE,
  LOGOUT_SUCCESS,
  TOKEN_REFRESH_FAILURE,
  SET_CURRENT_USER,
  LOGIN_FAILURE,
  CLEAR_ERRORS,
  CLEAR_SUCCESS,
  CLEAR_AUTH,
} from '../actions/types';

const initialState = {
  token: {},
  loading: false,
  errors: {},
  success: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        errors: {},
        success: '',
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: {},
        success: REGISTER_SUCCESS,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
        success: '',
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        token: action.token,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case LOGIN_SUCCESS:
      setAuthToken(action.payload.token);
      setLocalStorage(action.payload.token, 'token');
      return {
        ...state,
        token: jwtDecode(action.payload.token),
        errors: {},
        loading: false,
        success: 'Successfully logged in',
      };
    case TOKEN_REFRESH_SUCCESS:
      setAuthToken(action.payload.token);
      setLocalStorage(action.payload.token, 'token');
      return {
        ...state,
        token: jwtDecode(action.payload.token),
        refreshTokenPromise: null,
      };
    case TOKEN_REFRESH_FAILURE:
      removeLocalStorage('token');
      window.location.reload();
      return Object.assign({}, state, initialState);
    case SAVE_REFRESH_TOKEN_PROMISE:
      return {
        ...state,
        refreshTokenPromise: action.promise,
      };
    case CLEAR_REFRESH_TOKEN_PROMISE:
      return {
        ...state,
        refreshTokenPromise: null,
      };
    case LOGOUT_SUCCESS:
      localStorage.clear();
      window.location.reload();
      return Object.assign({}, state, initialState);
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {},
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        success: '',
      };
    case CLEAR_AUTH:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
}
