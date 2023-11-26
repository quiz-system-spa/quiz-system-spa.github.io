import { clearUserData, setUserData } from "../views/utils.js";
import { get, post } from "./api.js";

const endpoints = {
  register: "/users",
  login: "/login",
  logout: "/logout",
};

export async function registerUser(username, email, password) {
  const userData = await post(endpoints.register, { username, email, password });
  setUserData(userData);
  return userData
}
export async function loginUser(email, password) {
  const userData = await post(endpoints.login, { email, password });
  setUserData(userData);
  return userData
}
export async function logoutUser() {
  const userData = await post(endpoints.logout, {});
  clearUserData();
}
