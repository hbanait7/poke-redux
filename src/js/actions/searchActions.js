import { pokemon } from '../api/pokeApi';

export const REQUEST_POKEMON_SEARCH = 'REQUEST_POKEMON_SEARCH';
export const RECEIVE_POKEMON_SEARCH = 'RECEIVE_POKEMON_SEARCH';

export function requestPokemonSearch() {
  return {
    type: REQUEST_POKEMON_SEARCH
  };
}

export function receivePokemonSearch(pokemon) {
  return {
    type: RECEIVE_POKEMON_SEARCH,
    payload: pokemon
  };
}



export function searchPokemon(searchedPokemon) {

  let pmon;

  return dispatch => {
    dispatch(requestPokemonSearch()),
      pokemon.map(poke => {
        if (poke.name === searchedPokemon) {
          pmon = poke;
        }
      })
    dispatch(receivePokemonSearch(pmon))
  }
}






