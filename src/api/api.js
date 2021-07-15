import * as axios from "axios";

const instatnse = axios.create({
  baseURL: `http://77.120.241.80:8811/api/`,
});

export const userApi = {
  getUsers() {
    return instatnse.get("users").then((res) => res.data);
  },
  userDel(id) {
    return instatnse.delete(`user/${id}`);
  },
  addUser(user) {
    return instatnse.post(`users`, user);
  },
  updateUser(id, data) {
    return instatnse.put(`user/${id}`, data);
  },
};
