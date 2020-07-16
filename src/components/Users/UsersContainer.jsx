import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setToggleFetcher,
} from "../../redux/users-reducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersConteiner extends React.Component {
  componentDidMount() {
    this.props.setToggleFetcher(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setToggleFetcher(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setToggleFetcher(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setToggleFetcher(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        <div>
          {this.props.isFetching ? (
            <Preloader isFetching={this.props.isFetching} />
          ) : null}
        </div>

        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  totalUsersCount: state.usersPage.totalUsersCount,
  pageSize: state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
});
const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setToggleFetcher,
})(UsersConteiner);

export default UsersContainer;

// const mapDispatchToProps = (dispatch) => ({
//   follow: (usersId) => dispatch(followAC(usersId)),
//   unfollow: (usersId) => dispatch(unfollowAC(usersId)),
//   setUsers: (users) => dispatch(setUsersAC(users)),
//   setTotalUsersCount: (totalCount) =>
//     dispatch(setTotalUsersCountAC(totalCount)),
//   setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//   setToggleFetcher: (isfatching) => dispatch(setToggleFetcherAC(isfatching)),
// });
