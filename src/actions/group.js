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
} from './types';

/**
 * @route CreateGroup
 * @method POST
 * @param {string} groupName
 * @param {ImageBitmap} coverPhoto
 * @param {string} details
 * @param {String} tag
 * @desc create an group for  user
 */
export const registerGroup = (groupName, coverPhoto, details, tag) => ({
  [CALL_API]: {
    endpoint: '/CreateGroup',
    method: 'POST',
    body: {
      groupName: groupName,
      coverPhoto: coverPhoto,
      details: details,
      tag: tag,
    },
    types: [
      REGISTER_GROUP_REQUEST,
      REGISTER_GROUP_SUCCESS,
      REGISTER_GROUP_FAILURE,
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
