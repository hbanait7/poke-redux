import { combineReducers } from 'redux';

import { grid } from './gridReducer';
import { link } from './linkReducer';

const RootReducer = combineReducers({
  grid,
  link
});

export default RootReducer;