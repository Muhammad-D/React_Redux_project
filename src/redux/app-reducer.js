import { setAuth } from "./auth-reducer";

const INITIALIZATION_SUCCESS = "social-network/app/INITIALIZED_SUCCESED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZATION_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

const initializedSuccess = () => ({
  type: INITIALIZATION_SUCCESS,
});

export const globalInitializationSuccess = () => (dispatch) => {
  let propmise = dispatch(setAuth());

  Promise.all([propmise]).then((res) => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
