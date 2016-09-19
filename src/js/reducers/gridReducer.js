import { REQUEST_ALL_POKEMON, RECEIVE_ALL_POKEMON } from '../actions/gridActions';

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
        pokemon: action.payload.pokemon_species
      });
    default:
      return state
  };
}

