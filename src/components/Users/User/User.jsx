import React from "react";
import "./User.scss";
import avatarImg from "../../../assets/images/users.webp";
import { NavLink } from "react-router-dom";

const User = ({ followProgressing, unfollow, follow, user }) => {
  return (
    <div className="user">
      <NavLink to={`/profile/${user.id}`}>
        <img
          className="user__image"
          src={user.photos.small != null ? user.photos.small : avatarImg}
        />
      </NavLink>
      <div>
        <div>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div>
          <div>{"u.location.city"}</div>
          <div>{"u.location.country"}</div>
        </div>
      </div>
      <div>
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
