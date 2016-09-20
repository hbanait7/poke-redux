//import { pokemon } from '../api/pokeApi';

export const REQUEST_ALL_POKEMON = 'REQUEST_ALL_POKEMON';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export function requestAllPokemon() {
  return {
    type: REQUEST_ALL_POKEMON
  };
}

export function receiveAllPokemon(pokemon) {
  return {
    type: RECEIVE_ALL_POKEMON,
    payload: pokemon
  };
}

export function fetchAllPokemon(pokemon) {
  return dispatch => { 
    dispatch(requestAllPokemon()),
    dispatch(receiveAllPokemon(pokemon))
  };
}