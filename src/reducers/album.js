import {
  CREATE_ALBUM_REQUEST,
  CREATE_ALBUM_SUCCESS,
  CREATE_ALBUM_FAILURE,
  GET_ALL_ALBUMS_REQUEST,
  GET_ALL_ALBUMS_SUCCESS,
  GET_ALL_ALBUMS_FAILURE,
  GET_ALBUM_REQUEST,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAILURE,
} from 'actions/types';

const initialState = {
  albums: [],
  album: {},
  loading: false,
  success: '',
  failure: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_ALBUM_REQUEST:
      return {
        ...state,
        loading: true,
        success: '',
        failure: {},
      };
    case CREATE_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: CREATE_ALBUM_SUCCESS,
        album: action.payload,
      };
    case CREATE_ALBUM_FAILURE:
      return {
        ...state,
        loading: false,
        success: '',
        failure: action.payload,
      };
    case GET_ALL_ALBUMS_REQUEST:
      return {
        ...state,
        loading: true,
        success: '',
        failure: {},
      };
    case GET_ALL_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: action.payload,
        success: '',
        failure: {},
      };
    case GET_ALL_ALBUMS_FAILURE:
      return {
        ...state,
        loading: false,
        failure: action.payload,
      };
    case GET_ALBUM_REQUEST:
      return {
        ...state,
        loading: true,
        success: '',
        failure: {},
      };

    case GET_ALBUM_SUCCESS:
      return {
        ...state,
        loading: false,
        success: '',
        album: action.payload,
      };
    case GET_ALBUM_FAILURE:
      return {
        ...state,
        loading: false,
        success: '',
        failure: action.payload,
      };
    default:
      return state;
  }
}
