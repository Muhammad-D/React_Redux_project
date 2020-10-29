import { stopSubmit } from "redux-form";
import { authAPI } from "../assets/api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default authReducer;

export const setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const setAuth = () => {
  return (dispatch) => {
    return authAPI.getAuthorization().then((res) => {
      if (res.resultCode === 0) {
        let { id, email, login } = res.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const logIn = (formData) => {
  return (dispatch) => {
    authAPI.logIn(formData).then((res) => {
      if (res.resultCode === 0) {
        dispatch(setAuth());
      } else {
        debugger;
        let message = res.resultCode > 0 ? res.messages["0"] : "SOME ERROR";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};

export const logOut = () => (dispatch) => {
  authAPI.logOut().then((res) => {
    if (res.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};
