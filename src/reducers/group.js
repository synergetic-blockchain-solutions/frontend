import {
  GET_ALL_GROUPS_REQUEST,
  GET_ALL_GROUPS_SUCCESS,
  GET_ALL_GROUPS_FAILURE,
  GET_GROUP_REQUEST,
  GET_GROUP_SUCCESS,
  GET_GROUP_FAILURE,
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
    default:
      return state;
  }
}
