import { ADD_FAVORITE, DELETE_FAVORITE } from "./action-types";

const initialState = {
  myFavorites: []
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload] 
      }

    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          ((char) => char.id !== payload)
        )
      }

    default:
      return { ...state }
  }
};

export default reducer;
