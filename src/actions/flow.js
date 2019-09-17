import {
    CALL_API,
    REGISTER_ARTEFACT_REQUEST,
    REGISTER_ARTEFACT_SUCCESS,
    REGISTER_ARTEFACT_FAILURE,
    REGISTER_GROUP_REQUEST,
    REGISTER_GROUP_SUCCESS,
    REGISTER_GROUP_FAILURE,
  } from 'actions/types';
  
  /**
   * @route /createArtefact
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
  export const createArtefact = (title, image, tag, dateTaken, details, addToFamilies, address) => ({
    [CALL_API]: {
      endpoint: '/createArtefact',
      method: 'POST',
      body: {
        title: title,
        image: image,
        tag: tag,
        dateTaken: dateTaken,
        details: details,
        addToFamilies: addToFamilies,
        address: address,
      },
      types: [REGISTER_ARTEFACT_REQUEST, REGISTER_ARTEFACT_SUCCESS, REGISTER_ARTEFACT_FAILURE],
    },
  });
  

    /**
   * @route /createGroup
   * @method POST
   * @param {string} groupName
   * @param {ImageBitmap} coverPhoto
   * @param {string} details
   * @param {String} tag
   * @desc create an group for  user
   */
  export const createGroup = (groupName, coverPhoto, details, tag) => ({
    [CALL_API]: {
      endpoint: '/createGroup',
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