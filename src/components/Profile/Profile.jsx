import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div>
        <ProfileInfo />
        <MyPosts
          state={props.state}
          addPost={props.addPost}
          onPostChange={props.onPostChange}
        />
      </div>
    </div>
  );
};

export default Profile;
