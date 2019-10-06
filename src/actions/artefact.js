import {
  CALL_API,
  REGISTER_ARTEFACT_REQUEST,
  REGISTER_ARTEFACT_SUCCESS,
  REGISTER_ARTEFACT_FAILURE,
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
 * @param {string} title
 * @param {ImageBitmap} image
 * @param {string} tag
 * @param {Date} dateTaken
 * @param {String} details
 * @param {String} addToFamilies
 * @param {String} address
 * @desc create an artefact for the user
 */
export const registerArtefact = (
  name,
  image,
  tag,
  dateTaken,
  description,
  addToFamilies,
  address
) => ({
  [CALL_API]: {
    endpoint: '/artifact',
    method: 'POST',
    body: {
      name: name,
      description: description,
    },
    types: [
      REGISTER_ARTEFACT_REQUEST,
      REGISTER_ARTEFACT_SUCCESS,
      REGISTER_ARTEFACT_FAILURE,
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

export const resetArtefact = () => ({
  type: RESET_ARTIFACT,
});
