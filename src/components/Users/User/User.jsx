import React from "react";
import "./User.scss";
import avatarImg from "../../../assets/images/users.webp";
import { NavLink } from "react-router-dom";

import Button from "../../common/Button/Button";

const User = ({ followProgressing, unfollow, follow, user }) => {
  let fullName = user.name?.split(" ");

  window.user = user;
  return (
    <div className="user">
      <NavLink className="user__link" to={`/profile/${user.id}`}>
        <img
          className="user__image"
          src={user.photos.small != null ? user.photos.small : avatarImg}
        />
      </NavLink>
      <div className="user__information">
        <div className="user__fullname">
          {fullName && (
            <>
              <span className="user__first-name"> {fullName[0]} </span>{" "}
              {fullName[1] && (
                <span className="user__last-name"> {fullName[1]} </span>
              )}
            </>
          )}
        </div>
        {user.status && <span className="user__status">{user.status}</span>}
      </div>
      <div className="user__btn">
        {user.followed ? (
          <Button
            disabled={followProgressing.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            UNFOLLOWED
          </Button>
        ) : (
          <Button
            disabled={followProgressing.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            FOLLOWED
          </Button>
        )}
      </div>
    </div>
  );
};

export default User;
