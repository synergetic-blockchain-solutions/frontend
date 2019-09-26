import {
<<<<<<< HEAD
    CALL_API,
    REGISTER_GROUP_REQUEST,
    REGISTER_GROUP_SUCCESS,
    REGISTER_GROUP_FAILURE,
    ADD_MEMBER_REQUEST,
    ADD_MEMBER_SUCCESS,
    ADD_MEMBER_FAILURE,
  } from 'actions/types';
    
=======
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
>>>>>>> 1c90fb0f7e567030013a27404a2b6d6fb4104909

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
<<<<<<< HEAD
  });


    /**
   * @route addMemberToGroup
   * @method POST
   * @param {email} memberEmail
   * @desc create an group for  user
   */
  export const addMemberToGroup = (memberEmail) => ({
    [CALL_API]: {
      endpoint: '/AddMember',
      method: 'POST',
      body: {
        memberEmail: memberEmail,
      },
      types: [ADD_MEMBER_REQUEST, ADD_MEMBER_SUCCESS, ADD_MEMBER_FAILURE],
    },
  });
=======
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
>>>>>>> 1c90fb0f7e567030013a27404a2b6d6fb4104909
