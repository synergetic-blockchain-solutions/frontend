import {
  CREATE_ALBUM_REQUEST,
  CREATE_ALBUM_SUCCESS,
  CREATE_ALBUM_FAILURE,
  GET_ALL_ALBUMS_REQUEST,
  GET_ALL_ALBUMS_SUCCESS,
  GET_ALL_ALBUMS_FAILURE,
  GET_ALBUM_REQUEST,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAILURE,
  RESET_ALBUM,
  CALL_API,
} from './types';

/**
 * @route /album
 * @method POST
 * @param {string} name
 * @param {string} description
 * @param {array} owners
 * @param {array} groups
 * @param {array} sharedWith
 * @param {array} ALBUMs
 * @desc create an ALBUM for the user
 */
export const createAlbum = (
  name,
  description,
  owners,
  groups,
  sharedWith,
  ALBUMs = []
) => ({
  [CALL_API]: {
    endpoint: '/album',
    method: 'POST',
    body: {
      name,
      description,
      owners,
      groups,
      sharedWith,
      ALBUMs,
    },
    types: [CREATE_ALBUM_REQUEST, CREATE_ALBUM_SUCCESS, CREATE_ALBUM_FAILURE],
  },
});

/**
 * @route /album
 * @method GET
 * @desc create an ALBUM for the user
 */
export const getAlbums = (group, owner, shared) => ({
  [CALL_API]: {
    endpoint: '/album',
    method: 'GET',
    query: {
      group: group,
      owner: owner,
      shared: shared,
    },
    types: [
      GET_ALL_ALBUMS_REQUEST,
      GET_ALL_ALBUMS_SUCCESS,
      GET_ALL_ALBUMS_FAILURE,
    ],
  },
});

/**
 * @route /album/{id}
 * @method GET
 * @desc retrieve a specific album
 */
export const getAlbum = id => ({
  [CALL_API]: {
    endpoint: `/album/${id}`,
    method: 'GET',
    types: [GET_ALBUM_REQUEST, GET_ALBUM_SUCCESS, GET_ALBUM_FAILURE],
  },
});

export const resetAlbum = () => ({
  type: RESET_ALBUM,
});
