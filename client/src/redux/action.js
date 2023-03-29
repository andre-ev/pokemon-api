import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, GET_FAVORITE, ORDER, SET_POKEMON_TYPES } from "./action-types";
import axios from "axios";

// Conectando con la ruta del back para agregar favoritos
export const addFavorite = (pokemon) => {
  return function(dispatch) {
    try { 
      axios
        .post("http://localhost:3001/favs/create", pokemon) 
        .then((response) => {
          return dispatch({
            type: ADD_FAVORITE,
            payload: response.data
          });
        })
        .catch((error) => {
          console.error("Error al agregar favoritos.", error.message);
        });
    } catch(error) {
      return dispatch({ type: "ERROR", payload: error})
    }
  }
}

export const deleteFavorite = (id) => {
  return function(dispatch) {
    try { 
      axios
        .delete("http://localhost:3001/favs/delete/" + id)
        .then((response) => {
          return dispatch({
            type: DELETE_FAVORITE,
            payload: response.data
          })
        })
        .catch((error) => {
          console.error("Error al eliminar un elemento en favoritos.", error.message);
        })
    } catch(error) {
      return dispatch({ type: "ERROR", payload: error})
    }
  }
}

export function getFavorites() {
  return async function(dispatch) {
    try {
      const response = await axios("http://localhost:3001/favs/get");
      return dispatch({ type: GET_FAVORITE, payload: response.data })
    } catch(error) {
      return dispatch({ type: "ERROR", payload: error})
    }
  }
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
      return dispatch({ type: SET_POKEMON_TYPES, payload: types })
    } catch(error) {
      return dispatch({ type: "ERROR", payload: error})
    }
  }
}
