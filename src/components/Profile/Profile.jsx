import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  let posts = [
    { id: 1, likeCount: 15, message: "Hi, how are you?" },
    { id: 2, likeCount: 4, message: "It's my first post" },
    { id: 3, likeCount: 8, message: "It's great to be here" }
  ];

  return (
    <div className={s.content}>
      <div>
        <ProfileInfo />
        <MyPosts posts1={posts} />
      </div>
    </div>
  );
};

export default Profile;
