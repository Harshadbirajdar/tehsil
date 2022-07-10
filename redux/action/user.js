import axiosInstant from "../../helper/axios";
import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "./action.type";
import { toast } from "react-toastify";
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
      .post("/officer-login", user)
      .then((res) => {
        toast.success("लॉगिन यशस्वी");
        dispatch(loginSuccess(res.data));
      })
      .catch((err) => {
        toast.error(err.response.data?.msg);
        dispatch(loginFailed(err.response?.data));
      });
  };
};
