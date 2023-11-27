import { clearUserData, setUserData } from "../views/utils.js";
import { get, post } from "./api.js";

const endpoints = {
  register: "/users",
  login: "/login",
  logout: "/logout",
};

export async function registerUser(username, email, password) {
  const userInfo = await post(endpoints.register, { username, email, password });
  const userData = { username, email }
  userData.objectId = userInfo.objectId
  userData.sessionToken = userInfo.sessionToken
  setUserData(userData);
  return userData
}
export async function loginUser(email, password) {
  const userInfo = await post(endpoints.login, { email, password });
  const userData = { email }
  userData.objectId = userInfo.objectId
  userData.username = userInfo.username
  userData.sessionToken = userInfo.sessionToken
  setUserData(userData);
  return userData
}
export async function logoutUser() {
  const userData = await post(endpoints.logout, {});
  clearUserData();
}
