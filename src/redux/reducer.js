import { AUMENTAR_CONTADOR } from "./action-type";

const initialState = {
  count: 0,
  users: [],
  user: {}
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case AUMENTAR_CONTADOR:
      return {
        ...state,
        count: state.count + 1
      }

    default:
      return { ...state }
  }
};

export default reducer
