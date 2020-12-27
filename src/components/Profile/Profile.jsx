import React from "react";
import "./Profile.scss";

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

import backgroundImage from "../../assets/images/background-image.jpg";

const Profile = (props) => {
  return (
    <div className="profile">
      <img src={backgroundImage} className="profile__background-img" />
      <div className="profile-wrapper">
        <ProfileInfo
          userId={props.userId}
          profile={props.profile}
          status={props.status}
          updataStatus={props.updataStatus}
          uploadPhotos={props.uploadPhotos}
          isFetching={props.isFetching}
          isOwner={props.isOwner}
        />
      </div>
    </div>
  );
};

export default Profile;
