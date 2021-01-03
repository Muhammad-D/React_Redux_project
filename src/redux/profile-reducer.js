import { stopSubmit } from "redux-form";
import { profileAPI } from "../assets/api/api";

const ADD_NEW_POST = "social-network/profile/ADD-NEW-POST";
const SET_USER_PROFILE = "social-network/profile/SET_USER_PROFILE";
const SET_STATUS = "social-network/profile/SET_STATUS";
const SET_FETCHING = "social-network/profile/SET_FETCHING";
const DELETE_POST = "social-network/profile/DELETE_POST";
const UPLOAD_PHOTOS_SUCCESS = "social-network/profile/UPLOAD_PHOTOS_SUCCESS";

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
    case ADD_NEW_POST:
      let _newPost;
      _newPost = {
        id: Date.now(),
        likeCount: 0,
        message: action.newPostText,
      };
      return { ...state, posts: [...state.posts, _newPost] };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.postId),
      };
    case UPLOAD_PHOTOS_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload },
      };
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
const uploadPhotosSuccess = (photos) => ({
  type: UPLOAD_PHOTOS_SUCCESS,
  payload: photos,
});

export const setUser = (userId) => {
  return async (dispatch) => {
    dispatch(setFetching(true));
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
    dispatch(setFetching(false));
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

export const uploadPhotos = (photos) => async (dispatch) => {
  const res = await profileAPI.uploadPhotos(photos);
  if (res.resultCode === 0) dispatch(uploadPhotosSuccess(res.data.photos));
};
export const updateProfileData = (formData) => async (dispatch, getState) => {
  console.log(formData);
  const userId = getState().auth.id;
  const res = await profileAPI.updateProfileData(formData);
  if (res.resultCode === 0) {
    dispatch(setUser(userId));
  } else {
    const message = res.messages["0"];
    const objectName = message.slice(
      message.indexOf("(") + 1,
      message.indexOf("-")
    );
    const propName = message.slice(
      message.indexOf(">") + 1,
      message.indexOf(")")
    );
    const objectNameToLowerCase = objectName.toLowerCase();
    const propNameToLowerCase = propName.toLowerCase();
    dispatch(
      stopSubmit("edit-profile", {
        [objectNameToLowerCase]: { [propNameToLowerCase]: message },
      })
    );
    return Promise.reject(message);
  }
};
