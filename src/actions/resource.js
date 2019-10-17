import {
  POST_ARTIFACT_RESOURCE_REQUEST,
  POST_ARTIFACT_RESOURCE_SUCCESS,
  POST_ARTIFACT_RESOURCE_FAILURE,
  GET_ARTIFACT_RESOURCE_REQUEST,
  GET_ARTIFACT_RESOURCE_SUCCESS,
  GET_ARTIFACT_RESOURCE_FAILURE,
  DELETE_ARTIFCT_RESOURCE_REQUEST,
  DELETE_ARTIFCT_RESOURCE_SUCCESS,
  DELETE_ARTIFCT_RESOURCE_FAILURE,
  CALL_API,
} from './types';

/**
 * @route /artifact/:id/resource
 * @method POST
 * @param {number} id
 * @param {object} formData
 * @desc create a resource for an artifact
 */
export const addResourceToArtifact = (id, formData) => ({
  [CALL_API]: {
    endpoint: `/artifact/${id}/resource`,
    method: 'POST',
    body: formData,
    types: [
      POST_ARTIFACT_RESOURCE_REQUEST,
      POST_ARTIFACT_RESOURCE_SUCCESS,
      POST_ARTIFACT_RESOURCE_FAILURE,
    ],
  },
});

/**
 * @route /artifact/{artifactId}/resource/{resourceId}/resource
 * @method GET
 * @param {number} artifactId
 * @param {number} resourceId
 * @desc get a resource from an artifact
 */
export const getResource = (artifactId, resourceId) => ({
  [CALL_API]: {
    endpoint: `/artifact/${artifactId}/resource/${resourceId}`,
    method: 'GET',
    types: [
      GET_ARTIFACT_RESOURCE_REQUEST,
      GET_ARTIFACT_RESOURCE_SUCCESS,
      GET_ARTIFACT_RESOURCE_FAILURE,
    ],
  },
});

/**
 * @route /artifact/{artifactId}/resource/{resourceId}/resource
 * @method GET
 * @param {number} artifactId
 * @param {number} resourceId
 * @desc get a resource from an artifact
 */
export const deleteResource = (artifactId, resourceId) => ({
  [CALL_API]: {
    endpoint: `/artifact/${artifactId}/resource/${resourceId}`,
    method: 'DELETE',
    types: [
      DELETE_ARTIFCT_RESOURCE_REQUEST,
      DELETE_ARTIFCT_RESOURCE_SUCCESS,
      DELETE_ARTIFCT_RESOURCE_FAILURE,
    ],
  },
});
