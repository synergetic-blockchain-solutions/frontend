import {
    CALL_API,
    REGISTER_GROUP_REQUEST,
    REGISTER_GROUP_SUCCESS,
    REGISTER_GROUP_FAILURE,
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