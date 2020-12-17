import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./types";
import axios from "axios";
import authHeader from "./authheader";
export const registerUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:9005/api/auth/signup",
      formData
    );
    localStorage.setItem("isAuth", false);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const login = (username, password) => async (dispatch) => {
  const body = { username, password };
  try {
    const res = await axios.post("http://localhost:9005/api/auth/signin", body);
    localStorage.setItem("data", JSON.stringify(res.data));
    localStorage.setItem("isAuth", true);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.setItem("isAuth", false);
  dispatch({ type: LOGOUT });
};

export const getUser = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:9007/api/test/user", {
      headers: authHeader(),
    });
    console.log(JSON.stringify(res));
  } catch (err) {
    console.log(err);
  }
};
