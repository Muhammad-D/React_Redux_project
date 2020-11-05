import React from "react";
import style from "./Users.module.css";
import avatarImg from "../../assets/images/users.webp";
import { NavLink } from "react-router-dom";

const User = ({ followProgressing, unfollow, follow, user }) => {
  return (
    <div className={style.appWrapper}>
      <NavLink to={`/profile/${user.id}`}>
        <div className={`${style.avaImg} ${style.appWrapperContent}`}>
          <img
            src={user.photos.small != null ? user.photos.small : avatarImg}
          />
        </div>
      </NavLink>
      <div className={`${style.status} ${style.appWrapperContent}`}>
        <div className={style.statusChild}>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div className={style.statusChild}>
          <div>{"u.location.city"}</div>
          <div>{"u.location.country"}</div>
        </div>
      </div>
      <div className={`${style.followBtn} ${style.appWrapperContent}`}>
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
