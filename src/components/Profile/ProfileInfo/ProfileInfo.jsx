import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import travel from "../../../assets/images/travel_art_deco.jpg";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({ profile, userId, status, updataStatus, isFetching }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={s.content}>
      <div>
        <div>
          <img
            className={s.img}
            src={profile.userId === userId ? travel : profile.photos.large}
          />
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
