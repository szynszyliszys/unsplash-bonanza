import unsplash from '../apis/unsplash'

import {
  GET_PHOTO,
  UPDATE_SEARCH_QUERY_LIST,
  DELETE_SEARCH_QUERY,
  HANDLE_ERRORS
} from './types'

export const getPhoto = (query) => async dispatch => {
  await unsplash.get('/random', { params: { query: query } })
    .then((response) => {
      dispatch({ type: GET_PHOTO, payload: response.data })
      dispatch({ type: UPDATE_SEARCH_QUERY_LIST, payload: query })
    },
    (error) => dispatch({ type: HANDLE_ERRORS, payload: error.message }))
}

export const deleteSearchQuery = (query) => {
  return {
    type: DELETE_SEARCH_QUERY,
    payload: query
  }
}
