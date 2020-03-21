import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://cdn.pixabay.com/photo/2018/08/03/14/12/hummingbird-3581989_960_720.jpg" />
        <div>ava + description</div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
