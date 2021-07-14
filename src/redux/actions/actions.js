import { userApi } from "../../api/api";
import { SET_USERS, USERS_LOADED } from "../types/types";

export const setUsers = (users) => ({ type: SET_USERS, users });
export const usersLoaded = (statusLoaded) => ({
  type: USERS_LOADED,
  payload: statusLoaded,
});

export const requestUsers = () => {
  return async (dispatch) => {
    dispatch(usersLoaded(true));
    const data = await userApi.getUsers();
    dispatch(setUsers(data));
    dispatch(usersLoaded(false));
  };
};

export const userDelete = (id) => {
  return async (dispatch) => {
    const users = await userApi.userDel(id);
    console.log(users.data);
    dispatch(setUsers(users.data));
  };
};
