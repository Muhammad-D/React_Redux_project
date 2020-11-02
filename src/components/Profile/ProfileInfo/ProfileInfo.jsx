import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import travel from "../../../assets/images/travel_art_deco.jpg";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={s.content}>
      {/* <div>
        <img src="https://cdn.pixabay.com/photo/2018/08/03/14/12/hummingbird-3581989_960_720.jpg" />
      </div> */}
      <div>
        <div>
          <img
            className={s.img}
            src={
              props.profile.userId === props.userId
                ? travel
                : props.profile.photos.large
            }
          />
        </div>
        <div>
          <ProfileStatusWithHooks
            status={props.status}
            updataStatus={props.updataStatus}
            isFetching={props.isFetching}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
