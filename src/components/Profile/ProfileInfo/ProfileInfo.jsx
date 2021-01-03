import React, { useState } from "react";
import "./ProfileInfo.scss";

import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm/ProfileDataForm";
import Button from "../../common/Button/Button";

const ProfileInfo = ({ profile }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="profile-info">
      <div className="profile-info__wrapper">
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
          <Button onClick={(e) => setEditMode(true)}>Edit</Button>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
