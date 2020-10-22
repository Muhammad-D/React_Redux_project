import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileChange from "./ProfileChange/ProfileChange";

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
          <img src={props.profile.photos.large} />
        </div>
        <div>
          <ProfileChange status='See you there'/>
        </div>   
   </div>
    </div>
  );
};

export default ProfileInfo;
