import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from "../../redux/users-reducer";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
});
const mapDispatchToProps = (dispatch) => ({
  follow: (usersId) => dispatch(followAC(usersId)),
  unfollow: (usersId) => dispatch(unfollowAC(usersId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setTotalUsersCount: (totalCount) =>
    dispatch(setTotalUsersCountAC(totalCount)),
  setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
});
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
