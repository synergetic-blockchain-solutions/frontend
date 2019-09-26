import {
  GET_ALL_ARTIFACTS_REQUEST,
  GET_ALL_ARTIFACTS_SUCCESS,
  GET_ALL_ARTIFACTS_FAILURE,
  GET_ARTIFACT_REQUEST,
  GET_ARTIFACT_SUCCESS,
  GET_ARTIFACT_FAILURE,
} from 'actions/types';

const initialState = {
  artifacts: [],
  artifact: {},
  loading: false,
  success: '',
  failure: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ARTIFACTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_ARTIFACTS_SUCCESS:
      return {
        ...state,
        success: '',
        artifacts: action.payload,
        loading: false,
      };
    case GET_ALL_ARTIFACTS_FAILURE:
      return {
        ...state,
        failure: action.payload,
        loading: false,
      };
    case GET_ARTIFACT_REQUEST:
      return {
        ...state,
        loading: true,
        success: '',
        failure: {},
      };
    case GET_ARTIFACT_SUCCESS:
      return {
        ...state,
        loading: true,
        artifact: action.payload,
      };
    case GET_ARTIFACT_FAILURE:
      return {
        ...state,
        loading: true,
        failure: {},
      };
    default:
      return state;
  }
}
