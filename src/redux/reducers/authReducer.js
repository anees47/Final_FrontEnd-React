import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  ACCESS_SUCCESS,
} from "../actions/types";
import authHeader from "../actions/authheader";
const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true };
    case LOGIN_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true };
    case LOGOUT:
      return { ...state, token: null, isAuthenticated: false, user: null };

    case LOGOUT:
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
        user: null,
      };
    default:
      return state;
  }
};
