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
  ADD_TO_ALBUM_REQUEST,
  ADD_TO_ALBUM_FAILURE,
  ADD_TO_ALBUM_SUCCESS,
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
 * @param {array} albums
 * @desc create an album for the user
 */
export const createAlbum = (
  name,
  description,
  owners,
  groups,
  sharedWith,
  artifacts = []
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
      artifacts,
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

/**
 * @route /album/{albumID}/artifact/{artifactID}
 * @method PUT
 * @desc add an artifact to an album
 */
export const addArtifactToAlbum = (id, artifactId) => ({
  [CALL_API]: {
    endpoint: `/album/${id}/artifact/${artifactId}`,
    method: 'PUT',
    types: [ADD_TO_ALBUM_REQUEST, ADD_TO_ALBUM_SUCCESS, ADD_TO_ALBUM_FAILURE],
  },
});

export const resetAlbum = () => ({
  type: RESET_ALBUM,
});
