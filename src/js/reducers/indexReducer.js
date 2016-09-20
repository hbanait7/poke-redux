import { combineReducers } from 'redux';

import { grid } from './gridReducer';

const RootReducer = combineReducers({
  grid
});

export default RootReducer;