import { profileAPI } from "../assets/api/api";

const ADD_NEW_POST = "ADD-NEW-POST";
const CHANGE_POST = "CHANGE-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, likeCount: 15, message: "Hi, how are you?" },
    { id: 2, likeCount: 4, message: "It's my first post" },
    { id: 3, likeCount: 8, message: "It's great to be here" },
  ],
  newPostText: "enter your Post",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      let _newPost;
      _newPost = {
        id: 4,
        likeCount: 0,
        message: state.newPostText,
      };

      return { ...state, posts: [...state.posts, _newPost], newPostText: "" };
    }
    case CHANGE_POST: {
      return { ...state, newPostText: action.newTextOfPost };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export default profileReducer;

export const actionCreaterAddPost = () => ({
  type: ADD_NEW_POST,
});

export const actionCreaterChangePost = (value) => ({
  type: CHANGE_POST,
  newTextOfPost: value,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const setUser = (userId) => {
  return (dispatch) => {
    if (!userId) userId = 2;
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((res) => dispatch(setStatus(res)));
  };
};

export const updataStatus = (status) => {
  return (dispatch) => {
    profileAPI.updataStatus(status).then((res) => {
      if (res.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};
