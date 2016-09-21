import { REQUEST_POKEMON_LINK, RECEIVE_POKEMON_LINK } from '../actions/linkActions';

export function link(state = {
  isFetching: false,
  pokemon: null
}, action) {
  switch (action.type) {    
    case REQUEST_POKEMON_LINK:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POKEMON_LINK:
      return Object.assign({}, state, {
        isFetching: false,
        pokemon: action.payload
      });
    default:
      return state
  };
}     