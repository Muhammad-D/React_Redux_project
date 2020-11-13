import { userAPI } from "../api/api";
import { updateObjectInArray } from "../utilities/object-creater/object-creater";

const FOLLOW = "social-network/users/FOLLOW";
const UNFOLLOW = "social-network/users/UNFOLLOW";
const SET_USERS = "social-network/users/SET_USERS";
const SET_CURRENT_PAGE = "social-network/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "social-network/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "social-network/users/TOGGLE_IS_FETCHING";
const FOLLOW_PROGRESSING = "social-network/users/FOLLOW_PROGRESSING";

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: null,
  currentPage: 1,
  isFetching: true,
  followProgressing: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalcount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case FOLLOW_PROGRESSING:
      return {
        ...state,
        followProgressing: action.isFetching
          ? [...state.followProgressing, action.id]
          : state.followProgressing.filter((id) => id !== action.id),
      };
    default:
      return state;
  }
};

export default usersReducer;

export const followSuccess = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowSuccess = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalcount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalcount,
});
export const setToggleFetcher = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const setFollowProgressing = (isFetching, id) => ({
  type: FOLLOW_PROGRESSING,
  isFetching,
  id,
});

export const requestUsers = (pageSize, currentPage) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setToggleFetcher(true));

    let data = await userAPI.getUsers(pageSize, currentPage);
    dispatch(setToggleFetcher(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch,
  getFollowUnFollow,
  userId,
  followUnFollowSuccess
) => {
  dispatch(setFollowProgressing(true, userId));
  dispatch(setToggleFetcher(true));

  let data = await getFollowUnFollow(userId);
  dispatch(setToggleFetcher(false));
  if (data.resultCode === 0) dispatch(followUnFollowSuccess(userId));
  dispatch(setFollowProgressing(false, userId));
};

export const unfollow = (userId) => {
  return (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userAPI.getUnfollow.bind(userAPI),
      userId,
      unfollowSuccess
    );
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    followUnfollowFlow(
      dispatch,
      userAPI.getFollow.bind(userAPI),
      userId,
      followSuccess
    );
  };
};
