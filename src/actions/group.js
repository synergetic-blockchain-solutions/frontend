import {
  CALL_API,
  REGISTER_GROUP_REQUEST,
  REGISTER_GROUP_SUCCESS,
  REGISTER_GROUP_FAILURE,
  GET_ALL_GROUPS_REQUEST,
  GET_ALL_GROUPS_SUCCESS,
  GET_ALL_GROUPS_FAILURE,
  GET_GROUP_REQUEST,
  GET_GROUP_SUCCESS,
  GET_GROUP_FAILURE,
  ADD_GROUP_IMAGE_REQUEST,
  ADD_GROUP_IMAGE_SUCCESS,
  ADD_GROUP_IMAGE_FAILURE,
} from './types';

/**
 * @route /group
 * @method POST
 * @param {string} name
 * @param {string} description
 * @param {array} admins
 * @param {array} members
 * @desc Create a group
 */
export const createGroup = (name, description, admins, members) => ({
  [CALL_API]: {
    endpoint: '/group',
    method: 'POST',
    body: {
      name,
      description,
      admins,
      members,
    },
    types: [
      REGISTER_GROUP_REQUEST,
      REGISTER_GROUP_SUCCESS,
      REGISTER_GROUP_FAILURE,
    ],
  },
});

/**
 * @route /group/{id}/image
 * @method PUT
 * @param {number} id,
 * @param {FormData} formData
 * @desc Add an image to a group
 */
export const addImageToGroup = (id, formData) => ({
  [CALL_API]: {
    endpoint: `/group/${id}/image`,
    method: 'PUT',
    body: formData,
    types: [
      ADD_GROUP_IMAGE_REQUEST,
      ADD_GROUP_IMAGE_SUCCESS,
      ADD_GROUP_IMAGE_FAILURE,
    ],
  },
});

/**
 * @route /group
 * @method GET
 * @desc get all families for a user
 */
export const getGroups = () => ({
  [CALL_API]: {
    endpoint: '/group',
    method: 'GET',
    types: [
      GET_ALL_GROUPS_REQUEST,
      GET_ALL_GROUPS_SUCCESS,
      GET_ALL_GROUPS_FAILURE,
    ],
  },
});

/**
 * @route /group
 * @method GET
 * @desc get all families for a user
 */
export const getGroup = id => ({
  [CALL_API]: {
    endpoint: `/group/${id}`,
    method: 'GET',
    types: [GET_GROUP_REQUEST, GET_GROUP_SUCCESS, GET_GROUP_FAILURE],
  },
});
