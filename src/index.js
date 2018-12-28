import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import { loadState, saveState } from './localStorage'

import './index.css'
import App from './components/App'
import reducers from './reducers'

const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(reduxThunk))
)

store.subscribe(() => {
  saveState({
    searchQueries: store.getState().searchQueries
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
