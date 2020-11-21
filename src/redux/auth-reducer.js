import { stopSubmit } from "redux-form";
import { authAPI } from "../assets/api/api";

const SET_USER_DATA = "social-network/auth/SET_USER_DATA";
const SET_CAPTCHA_URL = "social-network/auth/CAPTCHA_URL";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case SET_CAPTCHA_URL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default authReducer;

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});
export const setCaptchaUrl = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  payload: { captchaUrl },
});

export const setAuth = () => {
  return async (dispatch) => {
    let res = await authAPI.getAuthorization();
    if (res.resultCode === 0) {
      let { id, email, login } = res.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
    return res;
  };
};

export const logIn = (formData) => {
  return async (dispatch) => {
    let res = await authAPI.logIn(formData);
    if (res.resultCode === 0) {
      dispatch(setAuth());
    } else {
      if (res.resultCode === 10) {
        dispatch(captcaHandler());
      }
      let message = res.resultCode > 0 ? res.messages["0"] : "SOME ERROR";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };
};

export const logOut = () => async (dispatch) => {
  let res = await authAPI.logOut();
  if (res.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

const captcaHandler = () => async (dispatch) => {
  const captchaUrl = await authAPI.getCaptchaUrl();
  dispatch(setCaptchaUrl(captchaUrl));
};
