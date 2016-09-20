import { pokemon } from '../api/pokeApi';

export const REQUEST_TYPE = 'REQUEST_TYPE';
export const RECEIVE_TYPE = 'RECEIVE_TYPE';

export function requestType() {
  return {
    type: REQUEST_TYPE
  };
}

export function receiveType(pokemon) {
  return {
    type: RECEIVE_TYPE,
    payload: pokemon
  };
}

export function fetchType(type) {

  let pmonType = [];

  return dispatch => {
    dispatch(requestType()),
      pokemon.map(poke => {
        poke.type.map(pokeType => {
          if (pokeType === type) {
            pmonType.push(poke)
          }
        })
      })
    dispatch(receiveType(pmonType))
  }
}