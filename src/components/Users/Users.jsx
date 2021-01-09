import React from "react";
import "./Users.scss";

import { Pagination } from "../common/Pagination/Pagination";
import User from "./User/User";

const Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <div className="users">
      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <section className="users__list">
        {users.map((user) => (
          <User
            key={user.id}
            followProgressing={props.followProgressing}
            unfollow={props.unfollow}
            follow={props.follow}
            user={user}
          />
        ))}
      </section>
    </div>
  );
};

export default Users;
