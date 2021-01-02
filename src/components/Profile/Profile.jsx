import React, { useState } from "react";
import "./Profile.scss";

import Preloader from "../common/Preloader/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfilePhotoStatus from "./ProfilePhotoStatus/ProfilePhotoStatus";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import backgroundImage from "../../assets/images/background-image.jpg";
import ProfileFollowing from "./ProfileFollowing/ProfileFollowing";

const Profile = ({
  profile,
  userId,
  status,
  updataStatus,
  isFetching,
  isOwner,
  uploadPhotos,
}) => {
  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className="profile">
      <img src={backgroundImage} className="profile__background-img" />
      <div className="profile__row">
        <div className="profile__row-wrapper">
          <ProfilePhotoStatus
            profile={profile}
            status={status}
            updataStatus={updataStatus}
            isFetching={isFetching}
            isOwner={isOwner}
            uploadPhotos={uploadPhotos}
          />
        </div>
      </div>

      <div className="profile__row">
        <ProfileFollowing />
        <MyPostsContainer />
        <ProfileInfo profile={profile} />
      </div>
    </div>
  );
};

export default Profile;
