import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = props => {
  return (
    <div className={s.content}>
      <div>
        <ProfileInfo />
        <MyPosts postsData={props.postsData} />
      </div>
    </div>
  );
};

export default Profile;
