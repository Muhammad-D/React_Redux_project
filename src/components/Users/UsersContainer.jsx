import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
});
const mapDispatchToProps = (dispatch) => ({
  follow: (usersId) => dispatch(followAC(usersId)),
  unfollow: (usersId) => dispatch(unfollowAC(usersId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
});
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
