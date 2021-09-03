import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { SET_CURRENT_USER } from "./types";
import jwt from "jsonwebtoken";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}
export function logout() {
  return (dispatch) => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  };
}

export const login = (data) => (dispatch) => {
  axios
    .post("http://localhost:8080/users/login", data)
    .then((response) => {
      console.log(response.data);
      const token = response.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    })
    .catch((error) => {
      console.log(error);
    });
};
