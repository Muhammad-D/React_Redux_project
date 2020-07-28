import React from "react";
import style from "./Users.module.css";
import avatarImg from "../../assets/images/users.webp";
import { NavLink } from "react-router-dom";
import { followAPI, unfollowAPI } from "../../assets/api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={
                props.currentPage === p ? style.pageCountSelector : null
              }
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id} className={style.appWrapper}>
          <NavLink to={`/profile/${u.id}`}>
            <div className={`${style.avaImg} ${style.appWrapperContent}`}>
              <img src={u.photos.small != null ? u.photos.small : avatarImg} />
            </div>
          </NavLink>
          <div className={`${style.status} ${style.appWrapperContent}`}>
            <div className={style.statusChild}>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div className={style.statusChild}>
              <div>{"u.location.city"}</div>
              <div>{"u.location.country"}</div>
            </div>
          </div>
          <div className={`${style.followBtn} ${style.appWrapperContent}`}>
            {u.followed ? (
              <button
                disabled={props.followProgressing.some((id) => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                UNFOLLOWED
              </button>
            ) : (
              <button
                disabled={props.followProgressing.some((id) => id === u.id)}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                FOLLOWED
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
