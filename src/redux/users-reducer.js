const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = " SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOW_PROGRESSING = "FOLLOW_PROGRESSING";

let initialState = {
  users: [],
  pageSize: 100,
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
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          } else {
            return u;
          }
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          } else {
            return u;
          }
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

export const follow = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollow = (userId) => ({
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
