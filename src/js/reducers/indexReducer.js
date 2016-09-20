import { combineReducers } from 'redux';

import { grid } from './gridReducer';
import { search } from './searchReducer';

const RootReducer = combineReducers({
  grid,
  search
});

export default RootReducer;