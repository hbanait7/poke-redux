import { REQUEST_POKEMON_SEARCH, RECEIVE_POKEMON_SEARCH } from '../actions/searchActions';

export function search(state = {
  isFetching: false,
  pokemon: ''
}, action) {
  switch (action.type) {
    case REQUEST_POKEMON_SEARCH:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POKEMON_SEARCH:
      if (action.payload === undefined) {
        return Object.assign({}, state, {
          isFetching: false,
          pokemon: 'not found'
        });
      } else {
        return Object.assign({}, state, {
          isFetching: false,
          pokemon: action.payload
        });
      }
    default:
      return state
  };
}