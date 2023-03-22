import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";

export const addFavorite = (pokemon) => {
  return { type: ADD_FAVORITE, payload: pokemon }
}

export const deleteFavorite = (id) => {
  return { type: DELETE_FAVORITE, payload: id }
}
