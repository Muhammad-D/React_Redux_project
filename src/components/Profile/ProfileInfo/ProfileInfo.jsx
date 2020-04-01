import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = props => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://cdn.pixabay.com/photo/2018/08/03/14/12/hummingbird-3581989_960_720.jpg" />
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
