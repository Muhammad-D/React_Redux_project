import React from "react";
import { useSelector } from "react-redux";
import "./ProfileFollowing.scss";

import FollowingUser from "./FollowingUser/FollowingUser";

const ProfileFollowing = () => {
  const state = useSelector((state) => state.sidebar);
  return (
    <>
      <div className="profile-following">
        <div className="profile-following__wrapper">
          <span className="profile-following__title">You Follow</span>
          <div className="profile-following__users">
            {state.followingUsers.map((user) => (
              <FollowingUser key={user.id} {...user} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileFollowing;
