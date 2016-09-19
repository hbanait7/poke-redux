import { applyMiddleware, createStore, compose } from 'redux';

import rootReducer from '../reducers/indexReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
      logger()
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;