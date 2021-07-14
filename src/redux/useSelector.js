export const getUsers = (state) => {
  return state.usersPage.users;
};

export const isUsersLoaded = (state) => {
  return state.usersPage.usersLoaded;
};
