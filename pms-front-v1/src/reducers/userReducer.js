/* eslint-disable import/no-anonymous-default-export */
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actions/type";

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, success: action.payload };
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}
