import React from "react";
import "./FollowingUser.scss";

const FollowingUser = ({ img, name, id }) => {
  return (
    <div className="following-user">
      <img className="following-user__photo" src={img} />
      <div className="following-user__name">{name}</div>
    </div>
  );
};

export default FollowingUser;
