import React from "react";
import "./User.scss";
import avatarImg from "../../../assets/images/users.webp";
import { NavLink } from "react-router-dom";

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
        <div className="profile-photo-status__fullname">
          {fullName && (
            <>
              <span className="profile-photo-status__first-name">
                {" "}
                {fullName[0]}{" "}
              </span>{" "}
              <span className="profile-photo-status__last-name">
                {" "}
                {fullName[1]}{" "}
              </span>
            </>
          )}
        </div>
        <div>{user.status}</div>
      </div>
      <div className="user__btn">
        {user.followed ? (
          <button
            disabled={followProgressing.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            UNFOLLOWED
          </button>
        ) : (
          <button
            disabled={followProgressing.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            FOLLOWED
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
