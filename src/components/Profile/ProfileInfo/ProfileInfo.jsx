import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import travel from "../../../assets/images/travel_art_deco.jpg";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
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
  const onUploadPhotos = (e) => {
    if (e.target.files.length) uploadPhotos(e.target.files["0"]);
  };

  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={s.content}>
      <div>
        <div>
          <img
            className={s.img}
            // src={profile.userId === userId ? travel : profile.photos.large}
            src={profile.photos.large || mockImg}
          />
          {isOwner && (
            <div>
              <input onChange={onUploadPhotos} type="file" />
            </div>
          )}
        </div>
        <div>
          <ProfileStatusWithHooks
            status={status}
            updataStatus={updataStatus}
            isFetching={isFetching}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
