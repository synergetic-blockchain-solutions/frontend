import {
  POST_ARTIFACT_RESOURCE_REQUEST,
  POST_ARTIFACT_RESOURCE_SUCCESS,
  POST_ARTIFACT_RESOURCE_FAILURE,
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
