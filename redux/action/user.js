import axiosInstant from "../../helper/axios";
import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "./action.type";

const loginStart = () => ({
  type: LOGIN_START,
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginFailed = (error) => ({
  type: LOGIN_FAIL,
  payload: error,
});

export const login = (user) => {
  return (dispatch) => {
    dispatch(loginStart());
    axiosInstant
      .post("/login", user)
      .then((res) => {
        dispatch(loginSuccess(res.data));
      })
      .catch((err) => {
        dispatch(loginFailed(err.response.data));
      });
  };
};
