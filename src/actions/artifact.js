import {
  CALL_API,
  REGISTER_ARTIFACT_REQUEST,
  REGISTER_ARTIFACT_SUCCESS,
  REGISTER_ARTIFACT_FAILURE,
  GET_ALL_ARTIFACTS_REQUEST,
  GET_ALL_ARTIFACTS_SUCCESS,
  GET_ALL_ARTIFACTS_FAILURE,
  GET_ARTIFACT_REQUEST,
  GET_ARTIFACT_SUCCESS,
  GET_ARTIFACT_FAILURE,
  RESET_ARTIFACT,
} from './types';

/**
 * @route /artifact
 * @method POST
 * @param {string} name
 * @param {string} description
 * @param {array} owners
 * @param {array} groups
 * @param {array} sharedWith
 * @param {array} tag
 * @param {string} date
 * @desc create an artifact for the user
 */
export const registerArtifact = (
  name,
  description,
  owners,
  groups,
  sharedWith,
  tag,
  date
) => ({
  [CALL_API]: {
    endpoint: '/artifact',
    method: 'POST',
    body: {
      name: name,
      description: description,
      owners,
      groups,
      sharedWith,
      tag,
      date,
    },
    types: [
      REGISTER_ARTIFACT_REQUEST,
      REGISTER_ARTIFACT_SUCCESS,
      REGISTER_ARTIFACT_FAILURE,
    ],
  },
});

/**
 * @route /artifact
 * @method GET
 * @desc create an artifact for the user
 */
export const getArtifacts = (group, owner, shared) => ({
  [CALL_API]: {
    endpoint: '/artifact',
    method: 'GET',
    query: {
      group: group,
      owner: owner,
      shared: shared,
    },
    types: [
      GET_ALL_ARTIFACTS_REQUEST,
      GET_ALL_ARTIFACTS_SUCCESS,
      GET_ALL_ARTIFACTS_FAILURE,
    ],
  },
});

/**
 * @route /artifact/{id}
 * @method GET
 * @desc create an artifact for the user
 */
export const getArtifact = id => ({
  [CALL_API]: {
    endpoint: `/artifact/${id}`,
    method: 'GET',
    types: [GET_ARTIFACT_REQUEST, GET_ARTIFACT_SUCCESS, GET_ARTIFACT_FAILURE],
  },
});

export const resetArtifact = () => ({
  type: RESET_ARTIFACT,
});
