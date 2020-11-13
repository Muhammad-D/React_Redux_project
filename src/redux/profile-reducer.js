import { profileAPI } from "../api/api";

const ADD_NEW_POST = "social-network/profile/ADD-NEW-POST";
const SET_USER_PROFILE = "social-network/profile/SET_USER_PROFILE";
const SET_STATUS = "social-network/profile/SET_STATUS";
const SET_FETCHING = "social-network/profile/SET_FETCHING";
const DELETE_POST = "social-network/profile/DELETE_POST";

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
    case SET_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.postId),
      };
    }
    default:
      return state;
  }
};

export default profileReducer;

export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});
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
  return async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
  };
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    let res = await profileAPI.getStatus(userId);
    dispatch(setStatus(res));
  };
};

export const updataStatus = (status) => {
  return async (dispatch) => {
    dispatch(setFetching(true));

    let res = await profileAPI.updataStatus(status);
    if (res.resultCode === 0) {
      dispatch(setFetching(false));
      dispatch(setStatus(status));
    }
  };
};
