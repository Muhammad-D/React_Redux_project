import { createSelector } from "reselect";

export const getUsersPre = (state) => {
  return state.usersPage.users;
};

export const getUsers = createSelector(getUsersPre, (users) => {
  return users.filter((item) => true);
});

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getFollowProgressing = (state) => {
  return state.usersPage.followProgressing;
};
