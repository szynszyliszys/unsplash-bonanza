import _ from 'lodash'

import {
  GET_PHOTO,
  HANDLE_ERRORS
} from '../actions/types'

const INITIAL_STATE = {
  photo: null,
  errors: []
}

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PHOTO:
      return { ...state, photo: action.payload, errors: [] }
    case HANDLE_ERRORS:
      return { ...state, errors: _.uniq([ ...state.errors, action.payload ]) }
    default:
      return state
  }
}
