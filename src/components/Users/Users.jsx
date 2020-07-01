import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        imgUrl:
          "https://cdn.pixabay.com/photo/2020/06/25/15/42/bulldog-french-5340020__340.jpg",
        fullName: "Edward",
        status: "blaBlaBla",
        location: { city: "Kiel", country: "Germany" },
      },
      {
        id: 2,
        followed: true,
        imgUrl:
          "https://cdn.pixabay.com/photo/2016/03/09/09/28/bear-1245807__340.jpg",
        fullName: "Luce",
        status: "to infinity and beyond",
        location: { city: "Tampere", country: "Finland" },
      },
      {
        id: 3,
        followed: false,
        imgUrl:
          "https://cdn.pixabay.com/photo/2019/09/16/14/45/sparrow-4481182__340.jpg",
        fullName: "Astrid",
        status: "Lalalala",
        location: { city: "Orebro", country: "Sweden" },
      },
      {
        id: 4,
        followed: false,
        imgUrl:
          "https://cdn.pixabay.com/photo/2020/06/16/18/15/dog-5306789__340.jpg",
        fullName: "Daan",
        status: "here I am",
        location: { city: "Groningen", country: "Netherlands" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id} className={style.appWrapper}>
          <div className={`${style.avaImg} ${style.appWrapperContent}`}>
            <img src={u.imgUrl} />
          </div>
          <div className={`${style.status} ${style.appWrapperContent}`}>
            <div className={style.statusChild}>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </div>
            <div className={style.statusChild}>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
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
