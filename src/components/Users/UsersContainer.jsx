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
  getUsers,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import WithAuthReddirect from "../hoc/withAuthRedirect";

class UsersConteiner extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(this.props.pageSize, pageNumber);
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
          isFetching={this.props.isFetching}
          followProgressing={this.props.followProgressing}
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


export default compose(WithAuthReddirect,
                       connect(mapStateToProps, {follow,unfollow,getUsers,})
                       )(UsersConteiner)

// const mapDispatchToProps = (dispatch) => ({
//   follow: (usersId) => dispatch(followAC(usersId)),
//   unfollow: (usersId) => dispatch(unfollowAC(usersId)),
//   setUsers: (users) => dispatch(setUsersAC(users)),
//   setTotalUsersCount: (totalCount) =>
//     dispatch(setTotalUsersCountAC(totalCount)),
//   setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//   setToggleFetcher: (isfatching) => dispatch(setToggleFetcherAC(isfatching)),
// });
