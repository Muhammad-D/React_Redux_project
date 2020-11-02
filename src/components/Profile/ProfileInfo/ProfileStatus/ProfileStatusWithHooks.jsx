import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileStatusWithHooks = ({ isFetching, status, updataStatus }) => {
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
  const activateEditMode = () => {
    setEditMode(true);
  };

  if (isFetching) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        {editMode ? (
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={localStatus}
            type="text"
          />
        ) : (
          <span onDoubleClick={activateEditMode}>{status || "-----"}</span>
        )}
      </div>
    </div>
  );
};

export default ProfileStatusWithHooks;
