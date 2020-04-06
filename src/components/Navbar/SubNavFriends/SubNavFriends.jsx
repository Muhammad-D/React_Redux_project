import React from "react";
import s from "./SubNavFriends.module.css";

const SubNavFriends = (props) => {
  return (
    <div className={s.mainDiv}>
      <img className={s.ava} src={props.friendsImg} />
      <div className={s.friendsName}>{props.friendsName}</div>
    </div>
  );
};

export default SubNavFriends;
