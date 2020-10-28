import { profileAPI } from "../assets/api/api";

const ADD_NEW_POST = "ADD-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_FETCHING = "SET_FETCHING";

let initialState = {
  posts: [
    { id: 1, likeCount: 15, message: "Hi, how are you?" },
    { id: 2, likeCount: 4, message: "It's my first post" },
    { id: 3, likeCount: 8, message: "It's great to be here" },
  ],
  profile: null,
  status: "",
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      let _newPost;
      _newPost = {
        id: 4,
        likeCount: 0,
        message: action.newPostText,
      };

      return { ...state, posts: [...state.posts, _newPost] };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    // case SET_FETCHING: {
    //   return { ...state, isFetching: action.isFetching };
    // }
    default:
      return state;
  }
};

export default profileReducer;

export const actionCreaterAddPost = (newPostText) => ({
  type: ADD_NEW_POST,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
const setFetching = (isFetching) => ({
  type: SET_FETCHING,
  isFetching,
});

export const setUser = (userId) => {
  return (dispatch) => {
    if (!userId) userId = 9212;
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getStatus = (userId) => {
  if (!userId) userId = 9212;
  return (dispatch) => {
    profileAPI.getStatus(userId).then((res) => dispatch(setStatus(res)));
  };
};

export const updataStatus = (status) => {
  return (dispatch) => {
    dispatch(setFetching(true));
    profileAPI.updataStatus(status).then((res) => {
      if (res.resultCode === 0) {
        dispatch(setFetching(false));
        dispatch(setStatus(status));
      }
    });
  };
};
