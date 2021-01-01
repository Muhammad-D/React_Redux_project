import React from "react";
import { useSelector } from "react-redux";
import "./ProfileFollowing.scss";

import FollowingUser from "./FollowingUser/FollowingUser";

const ProfileFollowing = () => {
  const state = useSelector((state) => state.sidebar);
  return (
    <>
      <div className="profile-following">
        <span className="profile-following__title">Your Friends</span>
        <div className="profile-following__users">
          {state.followingUsers.map((user) => (
            <FollowingUser key={user.id} {...user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileFollowing;
