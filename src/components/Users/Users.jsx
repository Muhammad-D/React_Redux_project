import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import avatarImg from "../../assets/images/users.webp";

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={style.appWrapper}>
          <div className={`${style.avaImg} ${style.appWrapperContent}`}>
            <img src={u.photos.small != null ? u.photos.small : avatarImg} />
          </div>
          <div className={`${style.status} ${style.appWrapperContent}`}>
            <div className={style.statusChild}>
              <div>{u.fullName}</div>
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
                  props.unfollow(u.id);
                }}
              >
                UNFOLLOWED
              </button>
            ) : (
              <button
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
