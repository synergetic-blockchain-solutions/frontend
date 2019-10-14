import {
  GET_ALL_GROUPS_REQUEST,
  GET_ALL_GROUPS_SUCCESS,
  GET_ALL_GROUPS_FAILURE,
  GET_GROUP_REQUEST,
  GET_GROUP_SUCCESS,
  GET_GROUP_FAILURE,
  REGISTER_GROUP_REQUEST,
  REGISTER_GROUP_SUCCESS,
  REGISTER_GROUP_FAILURE,
  ADD_GROUP_IMAGE_REQUEST,
  ADD_GROUP_IMAGE_SUCCESS,
  ADD_GROUP_IMAGE_FAILURE,
  UPDATE_GROUP_REQUEST,
  UPDATE_GROUP_SUCCESS,
  UPDATE_GROUP_FAILURE,
} from 'actions/types';

const initialState = {
  groups: [],
  group: {},
  loading: false,
  success: '',
  failure: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GROUPS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_GROUPS_SUCCESS:
      return {
        ...state,
        success: '',
        groups: action.payload,
        loading: false,
      };
    case GET_ALL_GROUPS_FAILURE:
      return {
        ...state,
        failure: action.payload,
        loading: false,
      };
    case GET_GROUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_GROUP_SUCCESS:
      return {
        ...state,
        group: action.payload,
        loading: false,
      };
    case GET_GROUP_FAILURE:
      return {
        ...state,
        failure: action.payload,
        loading: false,
      };
    case REGISTER_GROUP_REQUEST:
      return {
        ...state,
        loading: true,
        failure: {},
        success: '',
      };
    case REGISTER_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: REGISTER_GROUP_SUCCESS,
        group: action.payload,
      };
    case REGISTER_GROUP_FAILURE:
      return {
        ...state,
        loading: false,
        failure: action.payload,
      };
    case ADD_GROUP_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
        failure: {},
        success: '',
      };
    case ADD_GROUP_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: ADD_GROUP_IMAGE_SUCCESS,
      };
    case ADD_GROUP_IMAGE_FAILURE:
      return {
        ...state,
        loading: false,
        failure: action.payload,
      };
    case UPDATE_GROUP_REQUEST:
      return {
        ...state,
        loading: true,
        failure: {},
        success: '',
      };
    case UPDATE_GROUP_SUCCESS:
      return {
        ...state,
        loading: false,
        group: action.payload,
        success: 'User Successfully Added',
      };
    case UPDATE_GROUP_FAILURE:
      return {
        ...state,
        loading: false,
        failure: action.payload,
        success: '',
      };
    default:
      return state;
  }
}
