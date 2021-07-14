import { SET_USERS, USERS_LOADED } from "../types/types";

let initialState = {
  users: [],
  usersLoaded: null,
  statusDeleted: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case USERS_LOADED: {
      return { ...state, usersLoaded: action.payload };
    }
    default:
      return state;
  }
};

export default usersReducer;
