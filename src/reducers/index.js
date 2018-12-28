import { combineReducers } from 'redux'

import searchReducer from './searchReducer'
import searchQueriesReducer from './searchQueriesReducer'

export default combineReducers({
  search: searchReducer,
  searchQueries: searchQueriesReducer
})
