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
import * as axios from "axios";

class UsersConteiner extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  }
}

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
const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersConteiner);

export default UsersContainer;
