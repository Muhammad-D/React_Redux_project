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
  setFollowProgressing,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../assets/api/api";

class UsersConteiner extends React.Component {
  componentDidMount() {
    this.props.setToggleFetcher(true);
    userAPI
      .getUsers(this.props.pageSize, this.props.currentPage)
      .then((data) => {
        this.props.setToggleFetcher(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setToggleFetcher(true);
    userAPI.getUsers(this.props.pageSize, pageNumber).then((data) => {
      this.props.setToggleFetcher(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        <div>{this.props.isFetching ? <Preloader /> : null}</div>

        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          setToggleFetcher={this.props.setToggleFetcher}
          isFetching={this.props.isFetching}
          followProgressing={this.props.followProgressing}
          setFollowProgressing={this.props.setFollowProgressing}
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
  followProgressing: state.usersPage.followProgressing,
});
const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setToggleFetcher,
  setFollowProgressing,
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
