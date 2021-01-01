import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./ProfileStatus.scss";

import Preloader from "../../../common/Preloader/Preloader";

const ProfileStatusWithHooks = ({
  isFetching,
  status,
  updataStatus,
  isOwner,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [localStatus, setLocalStatus] = useState(status);
  useEffect(() => {
    setLocalStatus(status);
  }, [status]);

  const onStatusChange = (e) => {
    setLocalStatus(e.currentTarget.value);
  };
  const deactivateEditMode = () => {
    updataStatus(localStatus);
    setEditMode(false);
  };
  const deactivateEditModeOnEnter = (e) => {
    if (e.key === "Enter") {
      updataStatus(localStatus);
      setEditMode(false);
    }
  };
  const activateEditMode = () => {
    setEditMode(true);
  };

  if (isFetching) {
    return <Preloader />;
  }
  return (
    <div className="profile-status">
      {editMode && isOwner ? (
        <input
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deactivateEditMode}
          onKeyPress={deactivateEditModeOnEnter}
          value={localStatus}
          type="text"
        />
      ) : (
        <span onDoubleClick={activateEditMode}>{status || "-----"}</span>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
