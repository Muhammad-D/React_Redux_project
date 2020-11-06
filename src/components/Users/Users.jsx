import React from "react";
import { Pagination } from "../common/Pagination/Pagination";
import User from "./User";

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div>
      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />

      {users.map((user) => (
        <User
          key={user.id}
          followProgressing={props.followProgressing}
          unfollow={props.unfollow}
          follow={props.follow}
          user={user}
        />
      ))}
    </div>
  );
};

export default Users;
