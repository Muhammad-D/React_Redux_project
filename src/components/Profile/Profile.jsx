import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={s.content}>
      <div>
        <ProfileInfo
          userId={props.userId}
          profile={props.profile}
          status={props.status}
          updataStatus={props.updataStatus}
        />
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
