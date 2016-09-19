export const REQUEST_ALL_POKEMON = 'REQUEST_ALL_POKEMON';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

const apiUrl = 'http://pokeapi.co/api/v2/generation/1';

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

export function fetchingAllPokemon() {
  console.log('hello');
  return dispatch => {
    dispatch(requestAllPokemon())
    return fetch(apiUrl)
      .then(response => response.json())
      .then(json => dispatch(receiveAllPokemon(json)))
  }
}