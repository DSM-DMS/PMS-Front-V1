import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "./type";
import { request } from "../utils/axios/axios";

export function registerUser(dataToSubmit) {
  const data = request("post", "/user", "", dataToSubmit);
  return {
    type: REGISTER_USER,
    payload: data,
  };
}

export function loginUser(dataToSubmit) {
  const data = request("post", "/auth", "", dataToSubmit);
  return {
    type: LOGIN_USER,
    payload: data,
  };
}

export function logoutUser() {
  localStorage.removeItem("access-token");
  localStorage.removeItem("refresh-token");
  return { type: LOGOUT_USER };
}
