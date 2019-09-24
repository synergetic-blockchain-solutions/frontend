import {
    CALL_API,
    REGISTER_GROUP_REQUEST,
    REGISTER_GROUP_SUCCESS,
    REGISTER_GROUP_FAILURE,
    ADD_MEMBER_REQUEST,
    ADD_MEMBER_SUCCESS,
    ADD_MEMBER_FAILURE,
  } from 'actions/types';
    

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
      types: [REGISTER_GROUP_REQUEST, REGISTER_GROUP_SUCCESS, REGISTER_GROUP_FAILURE],
    },
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