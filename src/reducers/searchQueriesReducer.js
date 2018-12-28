import _ from 'lodash'

import {
  UPDATE_SEARCH_QUERY_LIST,
  DELETE_SEARCH_QUERY,
} from '../actions/types'

const INITIAL_STATE = {
  searchedQueries: []
}

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_QUERY_LIST:
      return { ...state, searchedQueries: _.uniq([ ...state.searchedQueries, action.payload ]) }
    case DELETE_SEARCH_QUERY:
      return { ...state, searchedQueries: state.searchedQueries.filter(query => query !== action.payload) }
    default:
      return state
  }
}
