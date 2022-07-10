import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "../action/action.type";

const initailState = {
  user: null,
  token: null,
  error: null,
  loading: false,
};

export const userReducer = (state = initailState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
