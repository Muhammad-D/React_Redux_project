import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://cdn.pixabay.com/photo/2018/08/03/14/12/hummingbird-3581989_960_720.jpg" />
        <div>ava + description</div>
        <div>
          My post
          <div>New post </div>
          <div className={s.posts}>
            <div className={s.item}>post 1</div>
            <div className={s.item}>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
