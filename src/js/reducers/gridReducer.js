import { REQUEST_ALL_POKEMON, RECEIVE_ALL_POKEMON } from '../actions/gridActions';
import { REQUEST_POKEMON_SEARCH, RECEIVE_POKEMON_SEARCH } from '../actions/searchActions';
import { REQUEST_TYPE, RECEIVE_TYPE } from '../actions/dropdownActions';

export function grid(state = {
  isFetching: false,
  pokemon: null
}, action) {
  switch (action.type) {
    case REQUEST_ALL_POKEMON:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_ALL_POKEMON:
      return Object.assign({}, state, {
        isFetching: false,
        pokemon: action.payload
      });
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
        let arr = [action.payload];
        return Object.assign({}, state, {
          isFetching: false,
          pokemon: arr
        });
      } 
    case REQUEST_TYPE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_TYPE:
      return Object.assign({}, state, {
        isFetching: false,
        pokemon: action.payload
      });              
    default:
      return state
  };
}


// line 29: had to put the payload in an array in order to let pokemon.map (gridContainer) iterate.
// Otherwise, pokemon.map tries to iterate over object resulting in error.


