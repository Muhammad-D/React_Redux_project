import React, { useState } from "react";
import "./ProfilePhotoStatus.scss";

import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

import mockImg from "../../../assets/images/users.webp";

const ProfilePhotoStatus = ({
  profile,
  status,
  updataStatus,
  isFetching,
  isOwner,
  uploadPhotos,
}) => {
  const [editModeShow, setEditModeShow] = useState(false);

  const onUploadPhotos = (e) => {
    if (e.target.files.length) {
      uploadPhotos(e.target.files["0"]);
      setEditModeShow(!editModeShow);
    }
  };

  let fullName = profile.fullName.split(" ");

  return (
    <>
      <div className="profile-photo-status">
        <div className="profile-photo-status__img-wrapper">
          <img
            className="profile-photo-status__img"
            src={profile.photos.large || mockImg}
          />
          {isOwner && (
            <button
              className="profile-photo-status__visibilety-edit-btn"
              onClick={(e) => setEditModeShow(!editModeShow)}
            >
              <AddAPhotoIcon />
            </button>
          )}
        </div>

        <ProfileStatusWithHooks
          isOwner={isOwner}
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

      <div className="profile-photo-status__fullname">
        {fullName && (
          <>
            <span className="profile-photo-status__first-name">
              {" "}
              {fullName[0]}{" "}
            </span>{" "}
            <span className="profile-photo-status__last-name">
              {" "}
              {fullName[1]}{" "}
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default ProfilePhotoStatus;
