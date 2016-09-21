import { pokemon } from '../api/pokeApi';

export const REQUEST_POKEMON_LINK = 'REQUEST_POKEMON_LINK';
export const RECEIVE_POKEMON_LINK = 'RECEIVE_POKEMON_LINK';

export function requestPokemonLink() {
  return {
    type: REQUEST_POKEMON_LINK
  };
}

export function receivePokemonLink(pokemon) {
  return {
    type: RECEIVE_POKEMON_LINK,
    payload: pokemon
  };
}



export function pokemonLink(id) {

  let pmon;

  return dispatch => {
    dispatch(requestPokemonLink()),
      pokemon.map(poke => {
        if (poke.id == id) {
          pmon = poke;
        }
      })
    dispatch(receivePokemonLink(pmon))
  }
}






