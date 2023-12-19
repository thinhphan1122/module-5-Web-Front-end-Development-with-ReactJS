// reducer.js
import { ActionTypes } from "./action";

const initialState = {
  users: [],
  alert: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ActionTypes.SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
