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
          uploadPhotos={props.uploadPhotos}
          isFetching={props.isFetching}
          isOwner={props.isOwner}
        />
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default Profile;
