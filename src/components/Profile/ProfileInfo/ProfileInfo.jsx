import React, { useState } from "react";
import "./ProfileInfo.scss";

import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm/ProfileDataForm";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

import mockImg from "../../../assets/images/users.webp";

const ProfileInfo = ({
  profile,
  userId,
  status,
  updataStatus,
  isFetching,
  isOwner,
  uploadPhotos,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editModeShow, setEditModeShow] = useState(false);

  const onUploadPhotos = (e) => {
    if (e.target.files.length) {
      uploadPhotos(e.target.files["0"]);
      setEditModeShow(!editModeShow);
    }
  };

  let fullName;
  if (profile != null) {
    fullName = profile.fullName.split(" ");
  }

  //window.profile = profile;

  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className="profile-info">
      <div className="profile-info__row">
        <div className="profile-info__img-status-wrapper">
          <div className="profile-info__img-wrapper">
            <img
              className="profile-info__img"
              src={profile.photos.large || mockImg}
            />
            <button
              className="profile-info__visibilety-edit-btn"
              onClick={(e) => setEditModeShow(!editModeShow)}
            >
              <AddAPhotoIcon />
            </button>
          </div>
          <ProfileStatusWithHooks
            status={status}
            updataStatus={updataStatus}
            isFetching={isFetching}
          />
        </div>
        <div className={`edit-photo ${editModeShow && "edit-photo_show"}`}>
          {isOwner && (
            <label className="edit-photo__label">
              <input
                onChange={onUploadPhotos}
                type="file"
                aria-label="File browser example"
              />
              <span className="edit-photo__custom-btn">Choose file</span>
            </label>
          )}
        </div>
        <div className="profile-info__fullname">
          {fullName && (
            <>
              <span className="profile-info__first-name"> {fullName[0]} </span>{" "}
              <span className="profile-info__last-name"> {fullName[1]} </span>
            </>
          )}
        </div>
      </div>
      <div className="profile-info__row">
        {!editMode ? (
          <ProfileData profile={profile} />
        ) : (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            setEditMode={setEditMode}
          />
        )}
        {editMode ? (
          ""
        ) : (
          <div>
            <button onClick={(e) => setEditMode(true)}>EDIT</button>
          </div>
        )}
        <div>
          <MyPostsContainer />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
