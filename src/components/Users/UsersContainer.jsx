import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, requestUsers } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import WithAuthReddirect from "../hoc/withAuthRedirect";
import {
  getUsers,
  getTotalUsersCount,
  getPageSize,
  getCurrentPage,
  getIsFetching,
  getFollowProgressing,
} from "../../redux/users-selector";

class UsersConteiner extends React.Component {
  componentDidMount() {
    const { pageSize, currentPage, requestUsers } = this.props;
    requestUsers(pageSize, currentPage);
  }

  onPageChanged = (pageNumber) => {
    const { pageSize, requestUsers } = this.props;
    requestUsers(pageSize, pageNumber);
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

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followProgressing: getFollowProgressing(state),
  };
};

export default compose(
  WithAuthReddirect,
  connect(mapStateToProps, { follow, unfollow, requestUsers })
)(UsersConteiner);
