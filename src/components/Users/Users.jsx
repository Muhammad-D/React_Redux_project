import React from "react";
import style from "./Users.module.css";
import avatarImg from "../../assets/images/users.webp";
import { NavLink } from "react-router-dom";
import Axios from "axios";

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
                onClick={() => {
                  Axios.delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "01899cbc-f994-420f-95ae-a25b4312fe06",
                      },
                    }
                  ).then((response) => {
                    if (response.data.resultCode === 0) props.unfollow(u.id);
                  });
                }}
              >
                UNFOLLOWED
              </button>
            ) : (
              <button
                onClick={() => {
                  Axios.post(
                    `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    {},
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "01899cbc-f994-420f-95ae-a25b4312fe06",
                      },
                    }
                  ).then((response) => {
                    if (response.data.resultCode === 0) props.follow(u.id);
                  });
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
