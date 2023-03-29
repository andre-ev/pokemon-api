import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, SET_POKEMON_TYPES } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  pokemonTypes: []
};

const reducer = (state = initialState, {type, payload}) => {
  const { allCharacters } = state;

  switch(type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload]
      }

    case DELETE_FAVORITE:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          ((char) => char.id !== payload)
        ),
        myFavorites: state.allCharacters.filter(
          ((char) => char.id !== payload)
        )
      }

    case FILTER:
      const allCharsFiltered = allCharacters.filter((char) => {
        return char.types.some((type) => type.type.name === payload )
      })

      return {
        ...state,
        myFavorites: allCharsFiltered
      }

    case ORDER:
      return {
        ...state,
        myFavorites:
          payload === "Ascendente"
          ? allCharacters.sort((a,b) => a.id - b.id)
          : allCharacters.sort((a,b) => b.id - a.id)
      }

    case SET_POKEMON_TYPES:
      return {
        ...state,
        pokemonTypes: payload
      }

    default:
      return { ...state }
  }
};

export default reducer;
