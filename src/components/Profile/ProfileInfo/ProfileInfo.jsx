import React, { useState } from "react";
import "./ProfileInfo.scss";

import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({ profile }) => {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="profile-info">
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
    </div>
  );
};

export default ProfileInfo;
