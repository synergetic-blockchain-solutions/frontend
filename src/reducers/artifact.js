import {
  REGISTER_ARTIFACT_REQUEST,
  REGISTER_ARTIFACT_SUCCESS,
  REGISTER_ARTIFACT_FAILURE,
  GET_ALL_ARTIFACTS_REQUEST,
  GET_ALL_ARTIFACTS_SUCCESS,
  GET_ALL_ARTIFACTS_FAILURE,
  GET_ARTIFACT_REQUEST,
  GET_ARTIFACT_SUCCESS,
  GET_ARTIFACT_FAILURE,
  POST_ARTIFACT_RESOURCE_REQUEST,
  POST_ARTIFACT_RESOURCE_SUCCESS,
  POST_ARTIFACT_RESOURCE_FAILURE,
  RESET_ARTIFACT,
} from 'actions/types';

const initialState = {
  artifacts: [],
  artifact: {},
  loading: false,
  success: '',
  failure: {},
  successCount: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_ARTIFACT_REQUEST:
      return {
        ...state,
        loading: true,
        success: '',
        failure: {},
      };
    case REGISTER_ARTIFACT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: REGISTER_ARTIFACT_SUCCESS,
        failure: {},
        artifact: action.payload,
      };
    case REGISTER_ARTIFACT_FAILURE:
      return {
        ...state,
        loading: false,
        success: '',
        failure: action.payload,
      };
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
    case POST_ARTIFACT_RESOURCE_REQUEST:
      return {
        ...state,
        loading: true,
        failure: {},
        success: '',
      };
    case POST_ARTIFACT_RESOURCE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: POST_ARTIFACT_RESOURCE_SUCCESS,
        successCount: state.successCount + 1,
        failure: {},
      };
    case POST_ARTIFACT_RESOURCE_FAILURE:
      return {
        ...state,
        loading: false,
        success: '',
        failure: action.payload,
      };
    case RESET_ARTIFACT:
      return initialState;
    default:
      return state;
  }
}
