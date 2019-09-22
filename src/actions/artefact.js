import {
    CALL_API,
    REGISTER_ARTEFACT_REQUEST,
    REGISTER_ARTEFACT_SUCCESS,
    REGISTER_ARTEFACT_FAILURE,
  } from 'actions/types';
  
  /**
   * @route /CreateArtefact
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
  export const registerArtefact = (title, image, tag, dateTaken, details, addToFamilies, address) => ({
    [CALL_API]: {
      endpoint: '/CreateArtefact',
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
  

