import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, SET_POKEMON_TYPES } from "./action-types";
import axios from "axios";

export const addFavorite = (pokemon) => {
  return { type: ADD_FAVORITE, payload: pokemon }
}

export const deleteFavorite = (id) => {
  return { type: DELETE_FAVORITE, payload: id }
}

export const filterCards = (types) => {
  return { type: FILTER, payload: types }
}

export const orderCards = (id) => {
  return { type: ORDER, payload: id }
}

export const setPokemonTypes = () => {
  return async function(dispatch) {
    try {
      let response = await axios("https://pokeapi.co/api/v2/type/");
      let types = response.data.results.map((type) => type.name);
      console.log(types);
      return dispatch({ type: SET_POKEMON_TYPES, payload: types })
    } catch (error) {
      console.log(error);
    }
  }
}
